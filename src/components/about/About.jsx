import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {RiUserShared2Line} from 'react-icons/ri'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="" />
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className='about__icon'></FaAward>
                        <h5>Experience</h5>
                        <small>1+ Years Learning</small>
                    </article>
                    <article className="about__card">
                        <RiUserShared2Line className='about__icon'></RiUserShared2Line>
                        <h5>Clients</h5>
                        <small>In The Process</small>
                    </article>
                    <article className="about__card">
                        <AiOutlineFolderOpen className='about__icon'></AiOutlineFolderOpen>
                        <h5>Projects</h5>
                        <small>3+ Complited</small>
                    </article>
                </div>

                <p>
                    wertyuiopafghjfopjniwnineweuweqe0qejqeqhe8quehqe -9qehquheq 0qheq ygequyeqh ubeugq
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About