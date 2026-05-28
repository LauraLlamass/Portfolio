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
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-card-bg px-5 py-3 text-card-text">
        <a className="font-display text-lg font-bold" href="/">
          Laura Llamas
        </a>

        <div className="flex items-center gap-5 text-sm font-semibold">
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
