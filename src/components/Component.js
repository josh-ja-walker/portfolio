
export function Link({text, link}) {
    return (
        <a style={{'color': 'darkgrey'}} href={link} target="_blank" rel="noopener noreferrer">{text}</a>
    );
}