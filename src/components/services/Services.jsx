import React from 'react'
import './services.css'
import {TbCheck} from 'react-icons/tb'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='services'>
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN */}
        <article className='services'>
          <div className="services__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='services'>
          <div className="services__head">
            <h3>Contenet Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <TbCheck className='service__list-icon'></TbCheck>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services