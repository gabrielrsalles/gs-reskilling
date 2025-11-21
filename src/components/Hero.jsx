import { useEffect, useState } from "react";

export default function Hero({ totalProfs }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = totalProfs;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      if (start > end) clearInterval(timer);
      else setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [totalProfs]);

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 via-green-700 to-green-800 px-8 py-12 text-green-50 shadow-2xl">
      
      <div className="absolute top-0 left-0 h-full w-full pointer-events-none z-50">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="absolute bg-green-300/70 rounded-full animate-float rotate-pulse" style={{ width: `${20 + Math.random() * 40}px`, height: `${20 + Math.random() * 40}px`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDuration: `${5 + Math.random() * 10}s`, animationDelay: `${Math.random() * 5}s`, opacity: 0.7, }}> </div> ))} </div>

      <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div className="space-y-6 animate-fade-in-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-100/90 animate-fade-in-up"> Futuro do trabalho · GS Web Dev </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight animate-pulse"> Transformando carreiras para novas oportunidades </h1>
          <p className="text-sm text-green-100/90 animate-fade-in-up delay-200">
            Explore histórias reais de profissionais que se reinventaram com{" "}
            <span className="font-medium">reskilling</span> e{" "}
            <span className="font-medium">upskilling</span>. Inspire-se e veja trajetórias de sucesso.
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-6">
          <div className="rounded-2xl bg-green-950/50 px-6 py-6 shadow-lg backdrop-blur-md animate-pulse-number">
            <p className="text-[11px] uppercase tracking-wider text-green-100/80">
              Profissionais mapeados
            </p>
            <p className="text-5xl font-bold">
              {count}
              <span className="ml-1 text-sm font-normal text-green-100/80">+</span>
            </p>
            <p className="text-[11px] text-green-100/80"> em jornadas de transição de carreira </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-25px) scale(1.1); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes rotatePulse {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.05); }
        }
        @keyframes pulseNumber {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .animate-fade-in-left { animation: fadeInLeft 1s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        .animate-pulse-number { animation: pulseNumber 1.5s infinite ease-in-out; }
        .animate-pulse { animation: pulseNumber 1.5s infinite ease-in-out; }
        .animate-float { animation: float infinite ease-in-out; }
        .rotate-pulse { animation: rotatePulse infinite ease-in-out; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </section>
  );
}