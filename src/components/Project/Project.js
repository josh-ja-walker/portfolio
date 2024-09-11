import '../../index.css';
import './Project.css';

/* List of projects */
function Projects() {
    return (
        <div className='Section'>
            <header>Projects</header>

            <ul id="ProjectList">
                <Project name='Sorts TUI' 
                    desc={<p>
                        Sort visualiser that simulates sorting algorithms on a bar chart, 
                        rendered in terminal using ratatui.rs crate for accessible and portable viewing. 
                        <br></br>
                        When sorted, outputs number of comparisons performed and corresponding algorithms'
                        time and space complexity. 
                        <br></br>
                        Provides terminal command line interface implemented using CLAP crate for ease of use.</p>}
                />

                <Project name='Weather Wallpaper'
                    desc={<p>
                        Wallpaper manager that dynamically changes desktop wallpaper to reflect local weather.
                        <br></br>
                        Provides interactive menu to set weather depicted in user supplied wallpapers, 
                        then matches to data retrieved from WeatherAPI.com
                    </p>}
                />
                
                <Project name={"Origame"}/>

            </ul>
        </div>
    );
}

/* Singular project */
function Project({name, desc}) {
    return (
        <li>
            <div className="Project">
                <header>{name}</header>
                <div className="description">{desc}</div>
            </div>
        </li>
    );
}

export default Projects;
