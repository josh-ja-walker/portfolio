import pfp from './pfp.jpg'
import './Header.css'

function Header() {
    return (
        <div id="Header">
            <img className="Profile" src={pfp} alt={"Profile"}/>
            
            <div id="Bio"> 
                <header>Joshua Walker</header>
                <p>Solo software and games developer</p>
            </div>
        </div>
    );
}

export default Header;