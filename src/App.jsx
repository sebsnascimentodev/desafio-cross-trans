import { useEffect } from 'react'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import ForWho       from './components/ForWho'
import WhatYouGet   from './components/WhatYouGet'
import BeforeAfter  from './components/BeforeAfter'
import Testimonials from './components/Testimonials'
import Plans        from './components/Plans'
import HowItWorks   from './components/HowItWorks'
import FAQ          from './components/FAQ'
import CTAFinal     from './components/CTAFinal'
import Footer       from './components/Footer'
import WaFloat      from './components/WaFloat'

function App() {
  // Inicializa o IntersectionObserver para animações de entrada
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    // Observa todos os elementos com classe .reveal (inclusive os adicionados depois)
    const observe = () => document.querySelectorAll('.reveal:not(.visible)').forEach((el) => io.observe(el))
    observe()
    // Re-observa após pequeno delay para pegar elementos renderizados no mount
    const t = setTimeout(observe, 100)
    return () => { io.disconnect(); clearTimeout(t) }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ForWho />
        <WhatYouGet />
        <BeforeAfter />
        <Testimonials />
        <Plans />
        <HowItWorks />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WaFloat />
    </>
  )
}

export default App
