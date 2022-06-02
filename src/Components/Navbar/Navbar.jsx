import React from 'react'
import './Navbar.css'
import Punk from '../../Images/cryptopunk7804.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <img className='n-logo' src={Punk} alt="Punk"/>
            <div className='n-motto'>
                <span className='n-motto-text'>"I think, therefore I am"</span>
                <span className='n-motto-declarator'>-René Descartes</span>
            </div>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul style={{listStyleType: 'none'}}>
                    <Link className='n-link' spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                    </Link>
                    <Link className='n-link' spy={true} to='Complain' smooth={true}>
                        <li>Complain William</li>
                    </Link>
                    <Link className='n-link' spy={true} to='Test' smooth={true}>
                        <li>Friend Quiz</li>                    
                    </Link>
                </ul>
            </div>
            <button className='button n-button'>
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar