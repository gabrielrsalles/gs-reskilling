export default function FiltersBar({
    searchTerm, onSearchChange, areaFilter, onAreaFilterChange, tipoTransicaoFilter, onTipoTransicaoFilterChange, riscoFilter, onRiscoFilterChange, }) {
    return (
      <section className="mb-4 flex flex-col gap-3 rounded-xl border border-green-200 bg-green-50/90 p-4 shadow-sm dark:border-green-800 dark:bg-green-900/90">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <input type="text" value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} placeholder="Buscar por nome, área ou habilidade..." className="w-full rounded-lg border border-green-300 bg-green-50 px-3 py-2 text-sm text-green-900 placeholder-green-500 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 dark:border-green-700 dark:bg-green-900 dark:text-green-200 dark:placeholder-green-400 dark:focus:border-green-400 dark:focus:ring-green-400" />
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <select value={areaFilter} onChange={(e) => onAreaFilterChange(e.target.value)} className="rounded-lg border border-green-300 bg-green-50 px-3 py-2 text-sm text-green-900 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 dark:border-green-700 dark:bg-green-900 dark:text-green-200 dark:focus:border-green-400 dark:focus:ring-green-400" >
              <option value="todas">Todas as áreas</option>
              <option value="tecnologia">Tecnologia</option>
              <option value="atendimento">Atendimento</option>
              <option value="logistica">Logística</option>
              <option value="comercial">Comercial</option>
            </select>
  
            <select value={tipoTransicaoFilter} onChange={(e) => onTipoTransicaoFilterChange(e.target.value)} className="rounded-lg border border-green-300 bg-green-50 px-3 py-2 text-sm text-green-900 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 dark:border-green-700 dark:bg-green-900 dark:text-green-200 dark:focus:border-green-400 dark:focus:ring-green-400" >
              <option value="todos">Todos os tipos</option>
              <option value="reskilling">Reskilling</option>
              <option value="upskilling">Upskilling</option>
            </select>
  
            <select value={riscoFilter} onChange={(e) => onRiscoFilterChange(e.target.value)} className="rounded-lg border border-green-300 bg-green-50 px-3 py-2 text-sm text-green-900 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 dark:border-green-700 dark:bg-green-900 dark:text-green-200 dark:focus:border-green-400 dark:focus:ring-green-400" >
              <option value="todos">Todos os níveis de risco</option>
              <option value="alto">Alto</option>
              <option value="medio">Médio</option>
              <option value="baixo">Baixo</option>
            </select>
          </div>
        </div>
      </section>
    );
  }