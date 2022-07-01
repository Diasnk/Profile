import React from 'react'
import {FaStaylinked} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {GiBatteryPackAlt} from 'react-icons/gi'

const Headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkdin.com" target="_blank"><FaStaylinked></FaStaylinked></a>
        <a href="https://github.com" target="_blank"><BsGithub></BsGithub></a>
        <a href="https://linkdin.com" target="_blank"><GiBatteryPackAlt></GiBatteryPackAlt></a>
    </div>
  )
}

export default Headersocials