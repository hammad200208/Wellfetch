import React from 'react'
import Hero from '../components/Hero'
import DailyWellness from '../components/DailyWellness'
import ChooseUs from '../components/ChooseUs'
import Product from '../components/Product'
import Testimonial from '../components/Testimonial'
import Faqs from '../components/Faqs'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <DailyWellness />
      <ChooseUs />
      <Product />
      <Testimonial />
      <Faqs />
      <Pricing />
      <Footer />
    </>
  )
}

export default Home
