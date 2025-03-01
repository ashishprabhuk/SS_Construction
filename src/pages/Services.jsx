import { Container, Card, Row, Col } from 'react-bootstrap'
import ServicesSection from '../components/ServiceSection'

export default function Services() {
  // const services = [
  //   { title: 'Service 1', description: 'Services we do...' },
  //   { title: 'Service 2', description: 'Services we do...' },
  //   { title: 'Service 3', description: 'Services we do...' },
  // ]

  return (
    <section className="py-5 bg-light">
      <ServicesSection/>
    </section>
  )
}