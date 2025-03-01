import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Labs from './pages/Labs'
import Request from './pages/Request'
import 'bootstrap/dist/css/bootstrap.min.css'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
      <ScrollToTopButton />
    </>
  )
}