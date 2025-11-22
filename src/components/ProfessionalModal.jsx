import { useEffect } from "react";

export default function ProfessionalModal({ profissional, onClose }) {
  useEffect(() => {
    if (!profissional) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [profissional, onClose]);

  if (!profissional) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleRecomendar = () =>
    alert(`Você recomendou ${profissional.nome}!`);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-green-900/60 px-4 py-6" onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-label={`Detalhes de ${profissional.nome}`} >
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-b from-green-50 to-green-100 shadow-2xl dark:from-green-950 dark:to-green-900">
    
        <button type="button" onClick={onClose} className="absolute right-4 top-4 rounded-full bg-green-800/80 px-3 py-1 text-sm text-green-100 hover:bg-green-700" > ✕ </button>

        <div className="flex flex-col gap-4 border-b border-green-300 px-6 py-6 sm:flex-row sm:items-center">
          <img src={profissional.foto} alt={`Foto de ${profissional.nome}`}className="h-24 w-24 rounded-full border-2 border-green-400 object-cover shadow"/>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-green-900 dark:text-green-100">
              {profissional.nome}
            </h2>
            <p className="mt-1 text-lg text-green-800 dark:text-green-200">
              {profissional.cargo}
            </p>
            <p className="text-sm text-green-600 dark:text-green-300">
              {profissional.area} • {profissional.localizacao}
            </p>
            <p className="mt-2 text-sm text-green-700 dark:text-green-300">
              {profissional.resumo}
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5 scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-100 dark:scrollbar-track-green-900">
          
          <div className="rounded-xl bg-green-200/60 p-4 dark:bg-green-800/40 shadow hover:shadow-md transition">
            <h3 className="text-sm font-semibold text-green-900 dark:text-green-100 uppercase">
              Habilidades Técnicas
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {profissional.habilidadesTecnicas.map((skill) => (
                <span key={skill} className="rounded-lg bg-green-300 px-2 py-1 text-green-900 dark:bg-green-700 dark:text-green-100" > {skill} </span>))}
            </div>
          </div>

          {profissional.softSkills && (
            <div className="rounded-xl bg-green-200/60 p-4 dark:bg-green-800/40 shadow hover:shadow-md transition">
              <h3 className="text-sm font-semibold text-green-900 dark:text-green-100 uppercase">
                Soft Skills & Hobbies
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {profissional.softSkills.map((skill) => (
                  <span key={skill} className="rounded-lg bg-green-300 px-2 py-1 text-green-900 dark:bg-green-700 dark:text-green-100" >  {skill} </span> ))}
              </div>
            </div>
          )}

          <div className="rounded-xl bg-green-100/50 p-4 dark:bg-green-900/40 shadow hover:shadow-md transition">
            <h3 className="text-sm font-semibold text-green-900 dark:text-green-100 uppercase"> Experiências </h3>
            <ul className="mt-2 space-y-2">
              {profissional.experiencias.map((exp, idx) => (
                <li key={idx} className="rounded-lg bg-green-200/70 p-3 dark:bg-green-800/50">
                  <p className="font-semibold">{exp.cargo} • {exp.empresa}</p>
                  <p className="text-green-700 dark:text-green-200 text-sm"> {exp.inicio} — {exp.fim ?? "Atual"} </p>
                  <p className="mt-1 text-green-700 dark:text-green-300 text-sm"> {exp.descricao} </p>
                </li>))}
            </ul>
          </div>

          <div className="rounded-xl bg-green-100/50 p-4 dark:bg-green-900/40 shadow hover:shadow-md transition">
            <h3 className="text-sm font-semibold text-green-900 dark:text-green-100 uppercase">
              Formação
            </h3>
            <ul className="mt-2 space-y-1.5">
              {profissional.formacao.map((f, idx) => (
                <li key={idx}>
                  <p className="font-semibold">{f.curso}</p>
                  <p className="text-green-700 dark:text-green-200 text-sm">
                    {f.instituicao} • {f.ano}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col gap-2 border-t border-green-300 px-6 py-4 sm:flex-row sm:justify-between">
          <div className="text-sm text-green-700 dark:text-green-300">
            Conecte-se com {profissional.nome} e apoie sua jornada de requalificação.
          </div>
          <button type="button" onClick={handleRecomendar} className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-600 transition" >⭐ Recomendar profissional </button>
        </div>
      </div>
    </div>
  );
}
