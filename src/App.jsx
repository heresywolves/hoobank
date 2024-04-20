import React from 'react'
import './index.css'
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer  } from './components'

const App = () => {
  return (
    <div className='bg-primary'>
      <div className="white__gradient">
        <Navbar />
        <Hero />  
        <Stats />
      </div>

      <div>
        <div>
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
