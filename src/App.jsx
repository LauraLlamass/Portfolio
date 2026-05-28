import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

function getRoute() {
  return {
    hash: window.location.hash,
    path: window.location.pathname,
  }
}

function App() {
  const [route, setRoute] = useState(getRoute)

  const pages = {
    '/': <Home />,
    '/contact': <Contact />,
    '/projects': <Projects />,
  }

  useEffect(() => {
    const updateRoute = () => setRoute(getRoute())

    const handleLinkClick = (event) => {
      const link = event.target.closest('a')

      if (
        !link ||
        link.target ||
        link.hasAttribute('download') ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const url = new URL(link.href)

      if (url.origin !== window.location.origin) {
        return
      }

      event.preventDefault()
      window.history.pushState({}, '', `${url.pathname}${url.hash}`)
      updateRoute()
    }

    window.addEventListener('popstate', updateRoute)
    document.addEventListener('click', handleLinkClick)

    return () => {
      window.removeEventListener('popstate', updateRoute)
      document.removeEventListener('click', handleLinkClick)
    }
  }, [])

  useEffect(() => {
    if (route.hash) {
      requestAnimationFrame(() => {
        document.querySelector(route.hash)?.scrollIntoView()
      })
      return
    }

    window.scrollTo({ left: 0, top: 0 })
  }, [route])

  return (
    <>
      <Navbar currentPath={route.path} />
      {pages[route.path] || <Home />}
    </>
  )
}

export default App
