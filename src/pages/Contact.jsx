import ContactItem from '../components/ContactItem'
import { contactLinks } from '../data/contactLinks'

function Contact() {
  return (
    <main className="h-dvh overflow-y-hidden bg-main-bg px-4 py-24 text-main-text">
      <section className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          

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

          <div className="mt-10 grid gap-4">
            {contactLinks.map((contactLink) => (
              <ContactItem
                download={contactLink.download}
                href={contactLink.href}
                key={contactLink.label}
                label={contactLink.label}
                text={contactLink.text}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
