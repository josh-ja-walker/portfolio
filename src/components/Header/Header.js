import pfp from './pfp.jpg'
import './Header.css'

import { FaGithub, FaLinkedin, FaItchIo } from "react-icons/fa";


function Header() {
    return (
        <div className='header row'>
            <img className='profile' src={pfp} alt={'Profile'}/>
            
            <div className='col bio'> 
                <header>Joshua Walker</header>
                <p>Software engineer and developer</p>
                <Socials/>
            </div>

        </div>
    );
}

function Socials() {
    return (
        <div className='socials row'>
            <a href={'https://github.com/josh-ja-walker'}><FaGithub/></a>
            <a href={'https://www.linkedin.com/in/joshua-walker-080714238/'}><FaLinkedin/></a>
            <a href={'https://joshwalker.itch.io/'}><FaItchIo/></a>
        </div>
    );
}

export default Header;