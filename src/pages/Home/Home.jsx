import React from 'react'
import './Home.scss'
import Hero from '../Hero/Hero'
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import Contact1 from '../Contact/Contact1'
import Home1 from '../Home1/Home1'
import AdmissionForm from '../../components/AdmissionForm/AdmissionForm'
import Principal from '../Principal/Principal'
import Testimonials from '../Testimonials/Testimonials'

function Home() {
  return (
    <>
     <HeroSlider />
     <Hero />
     <Home1 />
     {/* <Principal /> */}
     {/* <AdmissionForm /> */}
     <Contact1 />
      <Testimonials />

    </>
  )
}

export default Home