import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Request from './pages/Request'
import 'bootstrap/dist/css/bootstrap.min.css'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import { useEffect, useState } from 'react'
import QuickEnquiryModal from './components/QuickEnquiryModal'
import ScrollToTop from './components/ScrollToTop'

export default function App() {

  // eslint-disable-next-line no-unused-vars
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const modalShown = localStorage.getItem('enquiryModalShown');
      if (!modalShown) {
        setShowEnquiryModal(true);
        localStorage.setItem('enquiryModalShown', 'true');
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollToTop/>
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
      <QuickEnquiryModal
        show={showEnquiryModal}
        onHide={() => setShowEnquiryModal(false)}
      />
    </>
  )
}