import { useState } from 'react'

import './index.css'
import logo from '../../Assets/Logo.png'
import hamburger from '../../Assets/hamburger.png'
import { Link } from 'react-scroll'
export function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
            <div className='navbar_logo'>
                <img src={logo} alt='logo' className='logo' />
            </div>
            <div className='desktop_menu'>
                <Link activeClass='active' to='intro_secion' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills_section' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Skills</Link>
                <Link activeClass='active' to='projects_section' spy={true} smooth={true} offset={-20} duration={500} className='desktopMenuListItem'>Portfolio</Link>
                <Link activeClass='active' to='blogs_section' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Blogs</Link>
            </div>
            <div className='desktop_menu_btn_div'>
                <button onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behaviour: 'smooth' });
                }} className='desktop_menu_btn'>
                    <i class="fa-light fa-address-book desktop_menu_img"></i>
                    Contact Me
                </button>
            </div>

            <img src={hamburger} alt='Menu' className='mobile_menu' onClick={() => setShowMenu(!showMenu)} />

            <div className='nav_menu' style={{display: showMenu ? 'flex' : 'none'}} >
                <Link activeClass='active' to='intro_secion' spy={true} smooth={true} offset={-100} duration={500} className='list_item' onClick={() => setShowMenu(false) } >Home</Link>
                <Link activeClass='active' to='skills_section' spy={true} smooth={true} offset={-70} duration={500} className='list_item' onClick={() => setShowMenu(false) } >Skills</Link>
                <Link activeClass='active' to='projects_section' spy={true} smooth={true} offset={-20} duration={500} className='list_item' onClick={() => setShowMenu(false) } >Portfolio</Link>
                <Link activeClass='active' to='blogs_section' spy={true} smooth={true} offset={-50} duration={500} className='list_item' onClick={() => setShowMenu(false) } >Blogs</Link>
                <Link activeClass='active' to='contact_section' spy={true} smooth={true} offset={-50} duration={500} className='list_item' onClick={() => setShowMenu(false) } >Contact</Link>
            </div>


        </nav>
    )
}