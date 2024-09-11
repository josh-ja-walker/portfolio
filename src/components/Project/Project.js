import './Project.css';


/* List of projects */
function Projects() {
    return (
        <ul>
            <li><Project name={"Sorts TUI"}/></li>
            <li><Project name={"Weather Wallpaper"}/></li>
            <li><Project name={"Origame"}/></li>
        </ul>
    );
}

/* Singular project */
function Project({ name }) {
    return (
        <div className="Project">
            <header className="Project-header">{name}</header>
            <div></div>
        </div>
    );
}

export default Projects;
