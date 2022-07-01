import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMarkEmailRead className='contact__option-icon'></MdOutlineMarkEmailRead>
            <h4>Email</h4>
            <h5>diasnugumanov258@gmail.com</h5>
            <a href='mailto:diasnugumanov258@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineInstagram className='contact__option-icon'></AiOutlineInstagram>
            <h4>Messenger</h4>
            <h5>SakutoAz</h5>
            <a href='https://www.instagram.com/sakutoaz/' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsTelegram className='contact__option-icon'></BsTelegram>
            <h4>Telegram</h4>
            <h5>@xplog</h5>
            <a href='https://telegram.me/<xplog>' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact