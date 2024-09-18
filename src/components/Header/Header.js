import { Link } from '../Component';

import pfp from './pfp.jpg'
import './Header.css'

import { FaGithub, FaLinkedin, FaItchIo } from "react-icons/fa";


function Header() {
    return (
        <div className='header row'>
            <img className='profile' src={pfp} alt={'Profile'}/>
            
            <div className='col bio'> 
                <header>Joshua Walker</header>
                <p>Solo software and games developer</p>
                <Socials/>
            </div>

        </div>
    );
}

function Socials() {
    return (
        <div className='socials row'>
            <Link text={<FaGithub/>} link={'https://github.com/josh-ja-walker'}/>
            <Link text={<FaLinkedin/>} link={'https://www.linkedin.com/in/joshua-walker-080714238/'}/>
            <Link text={<FaItchIo/>} link={'https://joshwalker.itch.io/'}/>
        </div>
    );
}

export default Header;