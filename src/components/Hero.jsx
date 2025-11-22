import { useEffect, useState } from "react";

export default function Hero({ totalProfs }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = totalProfs;
    const duration = 1200;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      if (start > end) clearInterval(timer);
      else setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [totalProfs]);

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 via-green-600 to-green-800 px-8 py-12 mt-6 shadow-2xl">

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(12)].map((_, i) => ( <div key={i} className="absolute rounded-full bg-green-300/30 animate-float" style={{ width: `${8 + Math.random() * 40}px`, height: `${8 + Math.random() * 40}px`, top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 100}%`, animationDuration: `${4 + Math.random() * 6}s`, animationDelay: `${Math.random() * 2}s`, }} /> ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-3 animate-fade-in-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-50 leading-snug">
            Redescubra seu potencial <br /> e novas oportunidades
          </h1>
          <p className="text-green-100/90 text-sm md:text-base">
            Conheça histórias inspiradoras de <span className="font-semibold">reskilling</span> e <span className="font-semibold">upskilling</span> e veja como profissionais estão conquistando novas carreiras.
          </p>
        </div>

        <div className="flex justify-end">
          <div className="rounded-2xl bg-green-950/70 p-4 md:p-5 shadow-lg text-center animate-pulse-number max-w-[150px]">
            <p className="text-xs uppercase text-green-200 tracking-wider">Profissionais acompanhados</p>
            <p className="text-3xl md:text-4xl font-bold text-green-50">{count}+</p>
            <p className="text-xs text-green-200">em jornadas de requalificação</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          0% { opacity:0; transform: translateX(-20px); }
          100% { opacity:1; transform:translateX(0); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulseNumber {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        .animate-fade-in-left { animation: fadeInLeft 1s ease-out forwards; }
        .animate-float { animation: float infinite ease-in-out; }
        .animate-pulse-number { animation: pulseNumber 1.5s infinite ease-in-out; }
      `}</style>
    </section>
  );
}
