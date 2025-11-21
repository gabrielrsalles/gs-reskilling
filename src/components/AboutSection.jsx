export default function AboutSection() {
    return (
      <section className="mt-2 rounded-xl border border-green-200 bg-green-50/90 p-4 text-sm text-green-800 shadow-sm dark:border-green-800 dark:bg-green-900/90 dark:text-green-200">
        <div className="space-y-2">
          <h2 className="text-base font-semibold text-green-900 dark:text-green-50">
            Sobre o projeto
          </h2>
          <p>
            Esta aplicação foi desenvolvida pensando no contexto do{" "}
            <span className="font-medium">Futuro do Trabalho</span>, apoiando
            pessoas cujas carreiras foram impactadas por automação, IA e novas
            tecnologias.
          </p>
          <p>
            Cada perfil representa uma trajetória de{" "}
            <span className="font-medium">reskilling</span> (mudança de área) ou{" "}
            <span className="font-medium">upskilling</span> (aperfeiçoamento na
            mesma área), destacando competências técnicas, soft skills,
            experiências, cursos e caminhos sugeridos para a requalificação
            profissional.
          </p>
          <p>
            O objetivo é mostrar que profissionais de funções em transformação
            podem se reposicionar no mercado, conectando sua experiência anterior
            a novas oportunidades em tecnologia, atendimento digital, logística
            moderna, e-commerce e outros setores em crescimento.
          </p>
        </div>
      </section>
    );
  }  