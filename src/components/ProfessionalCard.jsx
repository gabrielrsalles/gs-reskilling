export default function ProfessionalCard({ profissional, onClick }) {
  const {
    nome,
    foto,
    cargo,
    area,
    localizacao,
    habilidadesTecnicas,
    tipoTransicao,
    nivelRiscoAutomacao,
  } = profissional;

  const tipoLabel =
    tipoTransicao === "reskilling"
      ? "Reskilling"
      : tipoTransicao === "upskilling"
      ? "Upskilling"
      : "Transição";

  const riscoColor =
    nivelRiscoAutomacao === "alto"
      ? "bg-red-200 text-red-800 dark:bg-red-900/40 dark:text-red-200"
      : nivelRiscoAutomacao === "médio"
      ? "bg-yellow-200 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200"
      : "bg-emerald-200 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200";

  return (
    <button onClick={onClick} className="group flex flex-col p-4 text-left transition-transform hover:-translate-y-1 hover:shadow-lg focus:outline-none" >
      <div className="flex items-center gap-3">
        <img src={foto} alt={`Foto de ${nome}`} className="h-14 w-14 rounded-full border-2 border-green-500 object-cover" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-green-900 dark:text-green-100">
              {nome}
            </h2>
            <span className="inline-flex items-center rounded-full bg-green-200 px-2 py-0.5 text-[10px] font-semibold text-green-800 dark:bg-green-900/50 dark:text-green-100">
              {tipoLabel}
            </span>
          </div>
          <p className="mt-0.5 text-xs font-medium text-green-800 dark:text-green-200">
            {cargo}
          </p>
          <p className="mt-0.5 text-[11px] text-green-700 dark:text-green-300">
            {area} • {localizacao}
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {habilidadesTecnicas.slice(0, 3).map((skill) => ( <span key={skill} className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] text-green-800 group-hover:bg-green-200 group-hover:text-green-900 dark:bg-green-900/40 dark:text-green-200 dark:group-hover:bg-green-700 dark:group-hover:text-green-100" > {skill} </span> ))}
        {habilidadesTecnicas.length > 3 && (
          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] text-green-600 dark:bg-green-900/40 dark:text-green-200">
            +{habilidadesTecnicas.length - 3}
          </span>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px]">
        <span className={`inline-flex rounded-full px-2 py-0.5 font-medium ${riscoColor}`}>
          Risco: {nivelRiscoAutomacao}
        </span>
        <span className="text-green-700 group-hover:text-green-900 dark:text-green-300 dark:group-hover:text-green-100">
          Ver detalhes →
        </span>
      </div>
    </button>
  );
}
