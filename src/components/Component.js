import './Component.css';

export function Link({text, link}) {
    return (
        <a className='Link' href={link} target='_blank' rel='noopener noreferrer'>{text}</a>
    );
}

export function InlineList({items}) {
    const listItems = items.map(item => <li>{item}</li>);
    return <ul className='inline-list'>{listItems}</ul>;
}