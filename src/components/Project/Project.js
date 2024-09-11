import '../../index.css';
import './Project.css';

/* List of projects */
function Projects() {
    return (
        <div className='Section'>
            <header>Projects</header>

            <ul id="ProjectList">
                <Project name='Sorts TUI' 
                    subtitle='In-terminal sorting algorithms simulator'
                    desc={<p>
                        Sort visualiser that simulates sorting algorithms on a bar chart, 
                        rendered in terminal using ratatui.rs crate for accessible and portable viewing. 
                        <hr></hr>
                        When sorted, outputs number of comparisons performed and corresponding algorithms'
                        time and space complexity. 
                        <hr></hr>
                        Provides terminal command line interface implemented using CLAP crate for ease of use.</p>}
                />

                <Project name='Weather Wallpaper'
                    subtitle='Weather-dependent desktop wallpaper engine'
                    desc={<p>
                        Wallpaper manager that dynamically changes desktop wallpaper to reflect local weather.
                        <hr></hr>
                        Provides interactive menu to set weather depicted in user supplied wallpapers, 
                        then matches to data retrieved from WeatherAPI.com
                    </p>}
                />
                
            </ul>
        </div>
    );
}

/* Singular project */
function Project({name, subtitle, desc}) {
    return (
        <li>
            <div className="Project">
                <header>{name}</header>
                <div className='ProjectContent'>
                    <div className="ProjectSubtitle">{subtitle}</div>
                    <div className="ProjectDescription">{desc}</div>
                </div>
            </div>
        </li>
    );
}

export default Projects;
