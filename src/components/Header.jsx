import { useState, useEffect } from "react";

export default function Header({
  searchTerm,
  onSearchChange,
  areaFilter,
  onAreaFilterChange,
  tipoTransicaoFilter,
  onTipoTransicaoFilterChange,
  riscoFilter,
  onRiscoFilterChange,
}) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-500 bg-green-50/70 dark:bg-gray-900/80 border-b border-green-200 dark:border-green-800">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-2 gap-4">
      
        <div className="flex items-center gap-3 flex-shrink-0 ml-6">
          <div className="rounded-full p-2 transition-transform duration-300 hover:scale-110 bg-green-500 dark:bg-green-700">
            <img src="/icon.work.png" alt="Logo Futuro em Recomeço" className="h-8 w-8 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg text-green-900 dark:text-green-200">
              Futuro em Recomeço
            </span>
            <span className="text-xs uppercase tracking-wider text-green-700 dark:text-green-400">
              Histórias de reskilling & upskilling
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-1"> <input type="text" value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} placeholder="🔍 Buscar..." className="flex-1 min-w-[150px] rounded-2xl border-2 border-green-300 bg-green-50 px-3 py-1 text-sm font-medium text-green-900 placeholder-green-500 shadow-inner transition-all duration-300 focus:border-green-500 focus:ring-2 focus:ring-green-400 dark:border-green-700 dark:bg-green-900 dark:text-green-200 dark:placeholder-green-400 dark:focus:border-green-400 dark:focus:ring-green-500" />

          <select value={areaFilter} onChange={(e) => onAreaFilterChange(e.target.value)} className="min-w-[110px] rounded-2xl border-2 border-green-300 bg-green-50 px-2 py-1 text-sm font-medium text-green-900 shadow-md transition-all duration-300 hover:border-green-500 focus:ring-2 focus:ring-green-400 dark:border-green-700 dark:bg-green-900 dark:text-green-200 dark:hover:border-green-400 dark:focus:ring-green-500" >
            <option value="todas">Área</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="atendimento">Atendimento</option>
            <option value="logistica">Logística</option>
            <option value="comercial">Comercial</option>
          </select>

          <select value={tipoTransicaoFilter} onChange={(e) => onTipoTransicaoFilterChange(e.target.value)} className="min-w-[110px] rounded-2xl border-2 border-green-300 bg-green-50 px-2 py-1 text-sm font-medium text-green-900 shadow-md transition-all duration-300 hover:border-green-500 focus:ring-2 focus:ring-green-400 dark:border-green-700 dark:bg-green-900 dark:text-green-200 dark:hover:border-green-400 dark:focus:ring-green-500" >
            <option value="todos">Tipo</option>
            <option value="reskilling">Reskilling</option>
            <option value="upskilling">Upskilling</option>
          </select>

          <select value={riscoFilter} onChange={(e) => onRiscoFilterChange(e.target.value)} className="min-w-[110px] rounded-2xl border-2 border-green-300 bg-green-50 px-2 py-1 text-sm font-medium text-green-900 shadow-md transition-all duration-300 hover:border-green-500 focus:ring-2 focus:ring-green-400 dark:border-green-700 dark:bg-green-900 dark:text-green-200 dark:hover:border-green-400 dark:focus:ring-green-500" >
            <option value="todos">Risco</option>
            <option value="alto">Alto</option>
            <option value="medio">Médio</option>
            <option value="baixo">Baixo</option>
          </select>
        </div>

        <button onClick={toggleTheme} className="p-2 rounded-full hover:scale-110 transition-transform duration-300">
          <img src={theme === "light" ? "/dark-mode.png" : "/light-mode.png"}alt="Toggle Theme" className="h-6 w-6 object-contain" />
        </button>
      </div>
    </header>
  );
}
