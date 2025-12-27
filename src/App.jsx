import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import DailyWellness from './components/DailyWellness'
import ChooseUs from './components/ChooseUs'
import Product from './components/Product'
import Testimonial from './components/Testimonial'
import Faqs from './components/Faqs'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
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

export default App
