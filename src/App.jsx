import { useState } from "react";
import profissionaisData from "./data/profissionais";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProfessionalCard from "./components/ProfessionalCard";
import ProfessionalModal from "./components/ProfessionalModal";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";

export default function App() {
  const [selecionado, setSelecionado] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [areaFilter, setAreaFilter] = useState("todas");
  const [tipoTransicaoFilter, setTipoTransicaoFilter] = useState("todos");
  const [riscoFilter, setRiscoFilter] = useState("todos");

  const profissionaisFiltrados = profissionaisData.filter((prof) => {
    const busca = searchTerm.toLowerCase();
    const nomeMatch = prof.nome.toLowerCase().includes(busca);
    const areaMatch = areaFilter === "todas" || prof.area.toLowerCase() === areaFilter;
    const tipoMatch = tipoTransicaoFilter === "todos" || prof.tipoTransicao === tipoTransicaoFilter;
    const riscoMatch = riscoFilter === "todos" || prof.nivelRiscoAutomacao === riscoFilter;

    return nomeMatch && areaMatch && tipoMatch && riscoMatch;});

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-50">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} areaFilter={areaFilter} onAreaFilterChange={setAreaFilter} tipoTransicaoFilter={tipoTransicaoFilter} onTipoTransicaoFilterChange={setTipoTransicaoFilter} riscoFilter={riscoFilter} onRiscoFilterChange={setRiscoFilter} />

      <main className="mx-auto flex w-full max-w-5xl flex-col space-y-6 px-6 py-8 sm:px-8 mt-24">
        <Hero totalProfs={profissionaisData.length} />

        <AboutSection className="rounded-xl border border-green-200 bg-green-50/90 p-6 text-center shadow-sm dark:border-green-700 dark:bg-green-900/90" />

        <section className="mt-12">
          <div className="relative rounded-2xl bg-green-300/90 dark:bg-green-900/80 p-6 shadow-xl">
            <h2 className="mb-4 text-lg font-semibold text-green-900 dark:text-green-100">
              Profissionais em destaque
            </h2>

            <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {profissionaisFiltrados.map((prof) => ( <ProfessionalCard key={prof.id} profissional={prof} onClick={() => setSelecionado(prof)} />))}

              {profissionaisFiltrados.length === 0 && ( <p className="col-span-full text-center text-green-900 dark:text-green-100"> Nenhum profissional encontrado.</p> )}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selecionado && (
        <ProfessionalModal profissional={selecionado} onClose={() => setSelecionado(null)} /> )}
    </div>
  );
}
