import LoremIpsum from 'react-lorem-ipsum';

import './About.css'
import '../../index.css'

function About() {
    return (
        <div id='About' className='Section'>
            <header>About</header>
            <p>
                <LoremIpsum />
            </p>
        </div>
    );
}

export default About;