function Hero() {
  return (
    <section className="bg-dark-bg px-4 pb-12 pt-28 text-dark-text sm:pt-24 md:pb-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div className="relative z-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-orange sm:tracking-[0.36em]">
            Junior Frontend Developer
          </p>

          <h1 className="max-w-[8ch] font-display text-[4rem] font-bold uppercase leading-[0.82] text-cream sm:text-[5.4rem] md:text-[7rem]">
            Laura Llamas
          </h1>

          <p className="mt-7 max-w-xl text-base font-medium leading-7 text-cream md:text-lg">
            I build responsive React interfaces with careful visual detail,
            clear structure and a user-first mindset.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              className="rounded-full bg-orange-bg px-6 py-3 text-center text-sm font-bold text-orange-text transition hover:bg-card-bg hover:text-card-text"
              href="/projects"
            >
              View projects
            </a>
            <a
              className="rounded-full border-2 border-cream px-6 py-3 text-center text-sm font-bold text-cream transition hover:bg-cream hover:text-dark"
              download
              href="/cv/Laura_Llamas_CV.pdf"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden sm:min-h-[430px]">
          <div className="absolute bottom-0 left-0 right-0 z-10 mx-auto max-w-[420px] bg-orange-bg p-3 shadow-[12px_12px_0_rgba(252,224,188,0.18)] sm:p-4">
            <img
              alt="Illustrated frontend workspace with laptop, UI panels and creative desk details"
              className="aspect-[4/3] w-full object-cover"
              src="/images/hero/frontend-desk.png"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
