function Hero() {
  return (
    <section className="bg-dark-bg px-4 pb-8 pt-20 text-dark-text">
      <div className="mx-auto max-w-6xl">
        <div className="relative h-[430px] overflow-hidden md:h-[500px]">
          <p className="absolute left-[7%] top-[7%] z-50 text-xs font-bold uppercase tracking-[0.32em] text-orange md:text-sm">
            Personal portfolio
          </p>

          <div className="absolute left-[7%] top-[18%] z-20 h-[330px] w-[430px] bg-orange-bg md:h-[390px] md:w-[400px]">
            <div className="flex h-full items-center justify-center text-xs font-bold uppercase tracking-[0.2em] text-orange-text">
              Illustration
            </div>
          </div>

          <h1 className="absolute left-[18%] top-[11%] z-40 font-display text-[5.2rem] font-bold uppercase leading-[0.8] text-cream md:text-[7.6rem]">
            Laura Llamas
          </h1>

          <div className="absolute left-[18%] top-[24%] z-10 font-display text-[5.2rem] font-bold uppercase leading-[0.8] text-transparent md:text-[7.6rem]">
            <p className="[-webkit-text-stroke:1px_var(--color-orange)]">
              Laura Llamas
            </p>
            <p className="[-webkit-text-stroke:1px_var(--color-orange)]">
              Laura Llamas
            </p>
            <p className="[-webkit-text-stroke:1px_var(--color-orange)]">
              Laura Llamas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
