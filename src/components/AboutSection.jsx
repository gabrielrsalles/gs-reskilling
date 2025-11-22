export default function AboutSection() {
  return (
    <section className="mt-8 rounded-3xl bg-gradient-to-br from-green-50/90 to-green-100/80 p-6 shadow-2xl border border-green-300 dark:from-green-900/90 dark:to-green-800/80 dark:border-green-700">
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-green-900 dark:text-green-50">
          Sobre o projeto
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-2xl bg-green-100/80 p-4 shadow-md border border-green-200 dark:bg-green-800/80 dark:border-green-700 transition hover:scale-105 duration-300">

            <p className="text-green-800 dark:text-green-200 text-sm">
              Apoio a profissionais impactados por automação, IA e novas tecnologias, oferecendo caminhos para novas oportunidades.
            </p>
          </div>

          <div className="flex flex-col gap-2 rounded-2xl bg-green-100/80 p-4 shadow-md border border-green-200 dark:bg-green-800/80 dark:border-green-700 transition hover:scale-105 duration-300">
         
            <p className="text-green-800 dark:text-green-200 text-sm">
              Cada perfil destaca trajetórias de <strong>reskilling</strong> e <strong>upskilling</strong>, evidenciando cursos, experiências e competências.
            </p>
          </div>

          <div className="flex flex-col gap-2 rounded-2xl bg-green-100/80 p-4 shadow-md border border-green-200 dark:bg-green-800/80 dark:border-green-700 transition hover:scale-105 duration-300">
      
            <p className="text-green-800 dark:text-green-200 text-sm">
              Inspiramos e conectamos experiência passada com oportunidades em tecnologia, atendimento digital, logística moderna e e-commerce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
