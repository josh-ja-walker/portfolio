import './Component.css';
import { PiArrowUpRight } from "react-icons/pi";


export function Link({text, link}) {
    return (
        <span>
            <a className='link' href={link} target='_blank' rel='noopener noreferrer'>
                {text}<PiArrowUpRight/>
            </a>
        </span>
    );
}

export function InlineList({items}) {
    const listItems = items.map(item => 
        <li>{item}</li>
    );

    return <ul className='row inline-list'>{listItems}</ul>;
}