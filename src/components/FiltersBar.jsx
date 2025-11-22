export default function FiltersBar({
  searchTerm,
  onSearchChange,
  areaFilter,
  onAreaFilterChange,
  tipoTransicaoFilter,
  onTipoTransicaoFilterChange,
  riscoFilter,
  onRiscoFilterChange,
}) {
  return (
    <section className="mb-8 flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-green-100/90 to-green-200/80 p-6 shadow-2xl border border-green-300 dark:from-green-900/90 dark:to-green-800/80 dark:border-green-700">
      
      <input type="text" value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} placeholder="🔍 Buscar por nome, área ou habilidade..." className="w-full rounded-3xl border-2 border-green-300 bg-green-50 px-5 py-3 text-sm font-medium text-green-900 placeholder-green-500 shadow-inner transition-all duration-300 focus:border-green-500 focus:ring-2 focus:ring-green-400 dark:border-green-700 dark:bg-green-900 dark:text-green-200 dark:placeholder-green-400 dark:focus:border-green-400 dark:focus:ring-green-500" />

      <div className="flex flex-wrap gap-4">
  
        <select value={areaFilter} onChange={(e) => onAreaFilterChange(e.target.value)} className="flex-1 min-w-[150px] rounded-2xl border-2 border-green-300 bg-green-50 px-4 py-2 text-sm font-medium text-green-900 shadow-md transition-all duration-300 hover:border-green-500 focus:ring-2 focus:ring-green-400 dark:border-green-700 dark:bg-green-900 dark:text-green-200 dark:hover:border-green-400 dark:focus:ring-green-500" >
          <option value="todas">Todas as áreas</option>
          <option value="tecnologia">Tecnologia</option>
          <option value="atendimento">Atendimento</option>
          <option value="logistica">Logística</option>
          <option value="comercial">Comercial</option>
        </select>

        <select value={tipoTransicaoFilter} onChange={(e) => onTipoTransicaoFilterChange(e.target.value)} className="flex-1 min-w-[150px] rounded-2xl border-2 border-green-300 bg-green-50 px-4 py-2 text-sm font-medium text-green-900 shadow-md transition-all duration-300 hover:border-green-500 focus:ring-2 focus:ring-green-400 dark:border-green-700 dark:bg-green-900 dark:text-green-200 dark:hover:border-green-400 dark:focus:ring-green-500">
          <option value="todos">Todos os tipos</option>
          <option value="reskilling">Reskilling</option>
          <option value="upskilling">Upskilling</option>
        </select>

        <select value={riscoFilter} onChange={(e) => onRiscoFilterChange(e.target.value)} className="flex-1 min-w-[150px] rounded-2xl border-2 border-green-300 bg-green-50 px-4 py-2 text-sm font-medium text-green-900 shadow-md transition-all duration-300 hover:border-green-500 focus:ring-2 focus:ring-green-400 dark:border-green-700 dark:bg-green-900 dark:text-green-200 dark:hover:border-green-400 dark:focus:ring-green-500" >
          <option value="todos">Todos os níveis de risco</option>
          <option value="alto">Alto</option>
          <option value="medio">Médio</option>
          <option value="baixo">Baixo</option>
        </select>
      </div>
    </section>
  );
}
