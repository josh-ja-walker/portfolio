import './Component.css';

export function Link({text, link}) {
    return (
        <a className='Link' href={link} target='_blank' rel='noopener noreferrer'>{text}</a>
    );
}