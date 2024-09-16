import * as all_projects from './ProjectData';
import { TfiNewWindow } from 'react-icons/tfi';

import './Project.css'
import '../../index.css'


/* List of projects */
export default function ProjectSection() {
    return (
        <div className='projects section'>
            <header>Projects</header>

            <ul className='no-bull-list'>
                <Project {...all_projects.sortsTUI}/>
                <Project {...all_projects.weather_wallpaper}/>
                <Project {...all_projects.origame}/>
                <Project {...all_projects.bogosort}/>
                <Project {...all_projects.portfolio}/>
            </ul>
        </div>
    );
}


function ProjectLink(link) {
    return (
        <div className='link'>{link} <TfiNewWindow size={8}/></div>
    );
}

function ProjectImage({src, alt}) {
    if (src == null) {
        return null;
    }

    return <img src={src} alt={alt}/>;
}

/* Singular project */
export function Project({title, links, image, subtitle, desc}) {
    const linkItems = links.map(link => ProjectLink(link));
    
    return (
        <li>
            <div className='project row'>
                <div className='project left'>
                    <header>{title}</header>
                    <div className='links'>{linkItems}</div>
                    <ProjectImage src={image} alt={'TODO'}/>
                </div>

                <div>
                    <div className='subtitle'>{subtitle}</div>
                    <div className='description'>{desc}</div>
                </div>
            </div>
        </li>
    );
}
