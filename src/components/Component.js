
export function Link({title, link}) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
    );
}