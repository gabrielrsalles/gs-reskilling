import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-green-200 bg-green-50/80 backdrop-blur-md dark:border-green-800 dark:bg-green-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-700 text-sm font-bold text-white shadow-sm">
            <img src="/icon.work.png"  alt="Logo Futuro em Recomeço" className="h-5 w-5 object-contain" />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold text-green-900 dark:text-green-50"> Futuro em Recomeço </span>
            <span className="text-xs text-green-600 dark:text-green-400"> Histórias de reskilling &amp; upskilling </span>
          </div>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}