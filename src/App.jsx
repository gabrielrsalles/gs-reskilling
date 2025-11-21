import { useMemo, useState } from "react";
import profissionaisData from "./data/profissionais";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FiltersBar from "./components/FiltersBar";
import ProfessionalCard from "./components/ProfessionalCard";
import ProfessionalModal from "./components/ProfessionalModal";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";

function filtrarProfissionais(profissionais, searchTerm, areaFilter, tipoTransicaoFilter, riscoFilter) {
  const term = searchTerm.toLowerCase().trim();

  return profissionais.filter((p) => {
    const atendeBusca =
      term === "" ||
      p.nome.toLowerCase().includes(term) ||
      p.area.toLowerCase().includes(term) ||
      p.habilidadesTecnicas.some((h) => h.toLowerCase().includes(term));

    const atendeArea = areaFilter === "todas" ? true : p.area === areaFilter;

    const atendeTipo =
      tipoTransicaoFilter === "todos"
        ? true
        : p.tipoTransicao === tipoTransicaoFilter;

    const atendeRisco =
      riscoFilter === "todos"
        ? true
        : p.nivelRiscoAutomacao === riscoFilter;

    return atendeBusca && atendeArea && atendeTipo && atendeRisco;
  });
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [areaFilter, setAreaFilter] = useState("todas");
  const [tipoTransicaoFilter, setTipoTransicaoFilter] = useState("todos");
  const [riscoFilter, setRiscoFilter] = useState("todos");
  const [selecionado, setSelecionado] = useState(null);

  const profissionaisFiltrados = useMemo(
    () =>
      filtrarProfissionais( profissionaisData, searchTerm, areaFilter, tipoTransicaoFilter, riscoFilter ),
    [searchTerm, areaFilter, tipoTransicaoFilter, riscoFilter]
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-50">
      <Header />

      <main className="mx-auto flex w-full max-w-5xl flex-col space-y-6 px-6 py-8 sm:px-8">
        <Hero totalProfs={profissionaisData.length} />

        <div className="rounded-xl bg-green-50/80 dark:bg-green-900/70 p-4 shadow-md">
          <FiltersBar searchTerm={searchTerm} onSearchChange={setSearchTerm} areaFilter={areaFilter} onAreaFilterChange={setAreaFilter} tipoTransicaoFilter={tipoTransicaoFilter} onTipoTransicaoFilterChange={setTipoTransicaoFilter} riscoFilter={riscoFilter} onRiscoFilterChange={setRiscoFilter}/>
        </div>

        <AboutSection className="rounded-xl border border-green-200 bg-green-50/90 p-6 text-center shadow-sm dark:border-green-700 dark:bg-green-900/90" />

        <section className="mt-6">
          {profissionaisFiltrados.length === 0 ? (
            <p className="rounded-lg border border-dashed border-green-300 bg-green-50/80 px-4 py-6 text-center text-sm text-green-600 dark:border-green-700 dark:bg-green-900/80 dark:text-green-300">
              Nenhum profissional encontrado com esses critérios. Tente ajustar
              a busca ou os filtros.
            </p>
          ) : (
            <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {profissionaisFiltrados.map((prof) => ( <ProfessionalCard key={prof.id} profissional={prof} onClick={() => setSelecionado(prof)} className="hover:scale-105 transform transition-transform" /> ))}
            </div>
          )}
        </section>
      </main>

      <Footer />

      {selecionado && ( <ProfessionalModal profissional={selecionado} onClose={() => setSelecionado(null)} className="rounded-xl bg-green-50 dark:bg-green-900 p-6 shadow-lg" /> )}
    </div>
  );
}