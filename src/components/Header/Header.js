import pfp from './pfp.jpg'
import './Header.css'

function Header() {
    return (
        <div className='header row'>
            <img className='profile' src={pfp} alt={'Profile'}/>
            
            <div className='col bio'> 
                <header>Joshua Walker</header>
                <p>Solo software and games developer</p>
            </div>
        </div>
    );
}

export default Header;