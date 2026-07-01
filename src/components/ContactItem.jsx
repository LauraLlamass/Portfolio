function ContactItem({ label, text, href, download = false }) {
  const content = (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-red">
        {label}
      </p>
      <p className="mt-2 font-display text-2xl font-bold text-dark">{text}</p>
    </>
  )

  if (href) {
    const isExternal = href.startsWith('http')

    return (
      <a
        className="block bg-card-bg p-5 text-card-text transition hover:bg-orange-bg hover:text-orange-text"
        download={download}
        href={href}
        rel={isExternal ? 'noreferrer' : undefined}
        target={isExternal ? '_blank' : undefined}
      >
        {content}
      </a>
    )
  }

  return <div className="bg-card-bg p-5 text-card-text">{content}</div>
}

export default ContactItem
