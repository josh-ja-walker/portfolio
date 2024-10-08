import * as project_data from './ProjectData';
import { PiArrowUpRight } from "react-icons/pi";

import './Project.css'
import '../../index.css'
import { InlineList } from '../Component';

const all_projects = [
    project_data.sortsTUI, 
    project_data.weather_wallpaper, 
    project_data.origame, 
    // project_data.bogosort, 
    // project_data.portfolio
].sort(ProjectCmp);

export function ProjectCmp(a, b) {
    return ConvertYear(b.year) - ConvertYear(a.year);
}

function ConvertYear(year) {
    if (year.includes("-")) {
        const start = parseInt(year.slice(0, 4));
        const end = parseInt(year.slice(-4));
        return (start + end) / 2;
    }

    return year;
}

/* Actual list of projects */
export function MyProjects() {
    const projects = all_projects.map(project => <Project {...project}/>);
    return <ProjectSection header={'Projects'} projects={projects}/>;
}


/* Resuable function to render a list of projects */
export function ProjectSection({header, projects}) {
    return (
        <div className='projects section'>
            <header>{header}</header>
            <div>{projects}</div>
        </div>
    );
}

/* Singular project */
export function Project(props) {
    return (
        <div className='project row'>
            <div className='left'>
                <header>{props.year}</header>
            </div>

            <div>
                <header>{props.title} - {props.subtitle} <PiArrowUpRight/></header>
                <div className='description'>{props.desc}</div>
                <InlineList items={props.langs}/>
            </div>
        </div>
    );
}
