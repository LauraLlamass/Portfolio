const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

function Navbar({ currentPath = '/' }) {
  const getLinkClasses = (href) =>
    href === currentPath
      ? 'text-orange'
      : 'transition hover:text-orange focus-visible:text-orange'

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 py-3 sm:px-6 sm:py-4">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 rounded-3xl bg-card-bg px-4 py-3 text-card-text shadow-[0_10px_30px_rgba(36,21,24,0.12)] sm:justify-between sm:rounded-full sm:px-5">
        <a className="font-display text-base font-bold sm:text-lg" href="/">
          Laura Llamas
        </a>

        <a className="font-display text-base text:center font-bold sm:text-lg">
          Junior Frontend Developer
        </a>

        <div className="flex items-center gap-4 text-xs font-semibold sm:gap-5 sm:text-sm">
          {links.map((link) => (
            <a
              aria-current={link.href === currentPath ? 'page' : undefined}
              className={getLinkClasses(link.href)}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
