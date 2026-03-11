import React from 'react'
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import Container from '../../components/layout/Container'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
     <Container>
      <Header />
      <section className="py-16 max-w-[940px] mx-auto">
        <div className="flex flex-col text-center md:px-0 px-5">
          <h5 className='body-text font-medium text-primary'>GET IN TOUCH</h5>
          <h1 className="heading-2 my-6">Let's Talk About Better NCD Care</h1>
          <p className='body-text'>
            We work with hospitals, insurers, governments, and care partners across multiple regions. Tell us a bit about your organization, and our team will connect with you shortly.
          </p>
        </div>
        <ContactForm />
      </section>
      <Footer />
    </Container>
  )
}

export default Contact
