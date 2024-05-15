import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div>
      <Navbar />

      <div className='' style={{ marginTop: "40px" }}>
        <h1>This is employee management landing page</h1>
      </div>

      <div className='' style={{marginTop:"510px"}}>
        <Footer />
      </div>

    </div>
  )
}
