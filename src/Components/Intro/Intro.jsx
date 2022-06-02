import React from 'react'
import './Intro.css'
import {FaGithub, FaLinkedin, FaInstagram, FaWhatsapp} from 'react-icons/fa'

const Intro = () => {
  return (
    <div className='intro'>
        <div className='i-main'>
            <div className="i-name">
                <span>Hi! I am William. Nice to meet you!</span>
                <span>Bonjour! Je m’appelle William. C’est un plaisir de vous rencontrer!</span>
                <span>I am currently a full-stack developer in a top-ranked investment bank. Now based in Hong Kong.</span>
            </div>
            {/* <button className="button i-button">Find me</button> */}
            <div className="i-icons">
                <a href='https://wa.me/85256230050'>
                    <FaWhatsapp className="i-icons-button"></FaWhatsapp>
                </a>
                <a href='https://www.instagram.com/hkc_316'>
                    <FaInstagram className="i-icons-button"></FaInstagram>
                </a>
                <a href='https://www.linkedin.com/in/williamhkc'>
                    <FaLinkedin className="i-icons-button"></FaLinkedin>
                </a>
                <a href='https://github.com/hokachun'>
                    <FaGithub className="i-icons-button"></FaGithub>
                </a>
                
            </div>
        </div>
    </div>
  )
}

export default Intro