import LoremIpsum from 'react-lorem-ipsum';

import pfp from './pfp.jpg'
import './Header.css'

function Header() {
    return (
        <div id="Header">
            <img className="Profile" src={pfp} alt={"Profile picture"}/>
            
            <div id="Bio"> 
                <header>Joshua Walker</header>
                <p><LoremIpsum avgSentencesPerParagraph={1} avgWordsPerSentence={5} p={1}/></p>
            </div>
        </div>
    );
}

export default Header;