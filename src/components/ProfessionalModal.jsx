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

  const handleRecomendar = () => alert(`Você recomendou ${profissional.nome}!`);
  const handleMensagem = () => alert(`Simulação de envio de mensagem para ${profissional.nome}.`);

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-green-900/70 px-4 py-6" onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-label={`Detalhes de ${profissional.nome}`}>
      <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-green-700 bg-green-950 text-green-50 shadow-2xl">
        <button type="button" onClick={onClose} className="absolute right-3 top-3 rounded-full bg-green-800/80 px-2 py-1 text-xs text-green-100 hover:bg-green-700" > ✕ </button>

        <div className="flex flex-col gap-4 border-b border-green-700/60 bg-gradient-to-r from-green-600/60 via-green-700/50 to-green-900/80 px-5 pb-4 pt-5 sm:flex-row sm:items-center">
          <img src={profissional.foto} alt={`Foto de ${profissional.nome}`} className="h-16 w-16 rounded-full border-2 border-green-200 object-cover" />
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{profissional.nome}</h2>
            <p className="text-sm text-green-100/90">{profissional.cargo}</p>
            <p className="text-xs text-green-200/80">
              {profissional.area} • {profissional.localizacao}
            </p>
            <p className="mt-2 text-xs text-green-100/80">{profissional.resumo}</p>
          </div>
          <div className="flex flex-col gap-2 text-xs">
            <div className="rounded-full bg-green-800/70 px-3 py-1 text-green-100">
              Profissão anterior: <span className="font-semibold">{profissional.profissaoAnterior}</span>
            </div>
            <div className="rounded-full bg-green-800/70 px-3 py-1 text-green-100">
              Transição: <span className="font-semibold capitalize">{profissional.tipoTransicao}</span>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4 text-xs scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-900">
          <section>
            <h3 className="text-[11px] font-semibold uppercase tracking-wide text-green-300">
              Habilidades técnicas
            </h3>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {profissional.habilidadesTecnicas.map((skill) => (
                <span key={skill} className="rounded-full bg-green-700 px-2 py-0.5 text-[11px]" > {skill} </span> ))}
            </div>
          </section>

          <section>
            <h3 className="text-[11px] font-semibold uppercase tracking-wide text-green-300">
              Soft skills & hobbies
            </h3>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {profissional.softSkills?.map((skill) => (
                <span key={skill} className="rounded-full bg-green-700 px-2 py-0.5 text-[11px]">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="grid gap-3 md:grid-cols-2">
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-wide text-green-300">
                Experiências
              </h3>
              <ul className="mt-1 space-y-2">
                {profissional.experiencias.map((exp, idx) => (
                  <li key={idx} className="rounded-lg bg-green-800/60 p-2 text-[11px]">
                    <p className="font-semibold">{exp.cargo} • {exp.empresa}</p>
                    <p className="text-green-200">{exp.inicio} — {exp.fim ?? "Atual"}</p>
                    <p className="mt-1 text-green-100/80">{exp.descricao}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-wide text-green-300">
                  Formação
                </h3>
                <ul className="mt-1 space-y-1.5">
                  {profissional.formacao.map((f, idx) => (
                    <li key={idx}>
                      <p className="font-semibold">{f.curso}</p>
                      <p className="text-green-200">{f.instituicao} • {f.ano}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-wide text-green-300">
                  Idiomas
                </h3>
                <ul className="mt-1 space-y-1">
                  {profissional.idiomas?.map((idioma, idx) => (
                    <li key={idx} className="text-green-100">
                      {idioma.idioma} • {idioma.nivel}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-wide text-green-300">
                  Trilhas recomendadas
                </h3>
                <ul className="mt-1 list-disc space-y-1 pl-4 text-green-100">
                  {profissional.trilhasRecomendadas?.map((t, idx) => ( <li key={idx}>{t}</li> ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-[11px] font-semibold uppercase tracking-wide text-green-300">
              Projetos & certificações
            </h3>
            <div className="mt-1 grid gap-2 md:grid-cols-2">
              <div className="space-y-1">
                {profissional.projetos?.map((p, idx) => (
                  <div key={idx} className="rounded-lg bg-green-800/60 p-2">
                    <p className="text-[11px] font-semibold">{p.titulo}</p>
                    <p className="text-[11px] text-green-200">{p.descricao}</p>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer" className="mt-1 inline-block text-[11px] text-green-300 underline" > Ver projeto </a> )} </div> ))}
              </div>
              <ul className="space-y-1">
                {profissional.certificacoes?.map((c, idx) => ( <li key={idx} className="rounded-lg bg-green-800/60 p-2 text-[11px]"> {c}  </li> ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-2 border-t border-green-700/60 bg-green-950/90 px-5 py-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="text-[11px] text-green-300">
            Conecte-se com {profissional.nome} e apoie sua jornada de requalificação.
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={handleRecomendar} className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold text-white shadow-sm transition hover:bg-emerald-600" > ⭐ Recomendar profissional </button>
            <button type="button" onClick={handleMensagem} className="inline-flex items-center justify-center rounded-full border border-green-400 bg-transparent px-3 py-1 text-[11px] font-semibold text-green-200 transition hover:bg-green-600/20" >  ✉ Enviar mensagem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}