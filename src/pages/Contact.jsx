function Contact() {
  return (
    <main className="min-h-screen bg-main-bg px-4 py-24 text-main-text">
      <section className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-red">
            Contact
          </p>

          <h1 className="font-display text-[4.8rem] font-bold uppercase leading-[0.8] text-dark md:text-[7rem]">
            Let&apos;s talk
          </h1>

          <div className="mt-10 max-w-2xl space-y-5 text-base font-medium leading-7 text-ink md:text-lg">
            <p>
              I&apos;m looking for junior frontend opportunities where I can
              build clear, responsive interfaces with React, JavaScript and
              thoughtful visual details.
            </p>
            <p>
              I enjoy turning ideas into usable screens, improving layouts
              across devices and working with teams that care about accessible,
              well-organized user experiences.
            </p>
            <p>
              If my profile fits your project, team or internship role,
              I&apos;d be happy to hear from you.
            </p>
          </div>
        </div>

        <div className="relative pt-4 md:pt-20">
          <p className="font-display text-[4.6rem] font-bold uppercase leading-[0.78] text-transparent md:text-[6rem]">
            <span className="block [-webkit-text-stroke:1px_var(--color-orange)]">
              Contact
            </span>
            <span className="block [-webkit-text-stroke:1px_var(--color-orange)]">
              Contact
            </span>
            <span className="block [-webkit-text-stroke:1px_var(--color-orange)]">
              Contact
            </span>
          </p>

          <div className="mt-10 grid gap-4">
            <ContactItem
              label="Email"
              text="LauraLlamasRod@gmail.com"
              href="mailto:LauraLlamasRod@gmail.com"
            />
            <ContactItem
              label="GitHub"
              text="github.com/LauraLlamass"
              href="https://github.com/LauraLlamass"
            />
            <ContactItem
              label="LinkedIn"
              text="linkedin.com/in/laurallr"
              href="https://www.linkedin.com/in/laurallr/"
            />
            <ContactItem
              label="Resume"
              text="View resume section"
              href="/#resume"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function ContactItem({ label, text, href }) {
  const content = (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-red">
        {label}
      </p>
      <p className="mt-2 font-display text-2xl font-bold text-dark">{text}</p>
    </>
  )

  if (href) {
    return (
      <a
        className="block bg-card-bg p-5 text-card-text transition hover:bg-orange-bg hover:text-orange-text"
        href={href}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        target={href.startsWith('http') ? '_blank' : undefined}
      >
        {content}
      </a>
    )
  }

  return <div className="bg-card-bg p-5 text-card-text">{content}</div>
}

export default Contact
