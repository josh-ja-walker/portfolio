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
                
                <Project name='Origame'
                    subtitle='2D puzzle-platformer about folding paper'
                    desc={<p>
                        2D puzzle-platformer game based on the central mechanic of folding platforms in 
                        order to solve puzzles and progress through levels. 
                        <hr></hr>
                        Progressively introduces items and hazards that react with the environment, 
                        resulting in interesting and dynamic puzzle solving that increase in difficulty. 
                        <hr></hr>
                        Developed for my A level Computing project; I achieved a final grade of A*.
                    </p>}
                />
                
                <Project name='Painball'
                    subtitle='Ludwig Jam 2021 (Foddian)'
                    desc={<p>
                        Foddian pinball game, emulating the frustration of 
                        popular Bennett Foddy games like Getting Over It.
                        <hr></hr>
                        Developed for Ludwig Jam 2021, hosted by streamer Ludwig Ahgren. 
                        Highly rated during the jam - on gameplay, it was ranked 37th out of 151 entries.
                    </p>}
                />
                
                <Project name='Hexatris'
                    subtitle='Ludum Dare 49 (Unstable)'
                    desc={<p>
                        Stack hexagonal shaped blocks on a precarious island. 
                        <hr></hr>                
                        Inspired by Jenga and Tetris, Hexatris was developed in 
                        48 hours for the long running game jam Ludum Dare.
                    </p>}
                />
                
                <Project name='Balls in Holes'
                    subtitle='Kenney Jam 2021 (Rotation)'
                    desc={<p>
                        A golf game made exclusively with assets by the host of jam, 
                        Kenney, notable in the community for his high quality free assets.
                    </p>}
                />

                <Project name="It's so Amazeing"
                    subtitle='LowRezJam 2021'
                    desc={<p>
                        Atmospheric maze game constrained by the 64 x 64 resolution. 
                        <hr></hr>
                        Assets made in Blender. 
                        Most of the two weeks were spent learning modelling techniques; 
                        as such, some desired game mechanics could not be implemented in time.
                    </p>}
                />

                <Project name='None of your Zombusiness'
                    subtitle='Brackeys Jam 2021.1 (Stronger Together)'
                    desc={<p>
                        My first game: a 2D top-down shooter, initially intended to 
                        be a dynamic tower-defense game, where the players 
                        can move and shoot towers independently.
                        <hr></hr>
                        I learnt invaluable lessons about the limitations of design appetite, 
                        especially within the confines of a tight deadline.
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
