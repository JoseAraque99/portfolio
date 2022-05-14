import React from 'react'
import './contact.css'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ezb4ipi', 'template_xx6y2mo', form.current, 'MOQo8QA8o6NJ5NJ1s')

    e.target.reset()

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <HiOutlineMailOpen className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jaraque074@gmail.com</h5>
            <a href="mailto:jaraque074@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
          <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Jose Araque</h5>
            <a href="https://m.me/DracoSterven" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
          <ImWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+573122510730</h5>
            <a href="https://api.whatsapp.com/send?phone+573122510730" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder="Your Email" required />
          <textarea name='message' rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact