import { Link } from '../Component';

import sort_img from './Pictures/sorts_tui.png';
// import origame_img from './Pictures/origame.png';
import weather_wallpaper_img from './Pictures/weather_wallpaper.png';
// import bogosort_img from './Pictures/bogosort.png';

const ratatui = <Link text={'ratatui'} link={'https://crates.io/crates/ratatui'}/>;
const clap = <Link text={'CLAP'} link={'https://crates.io/crates/clap'}/>;

export const sortsTUI = { 
    title: 'Sorts TUI',
    links: [<Link text='GitHub' link={'https://github.com/josh-ja-walker/sorts_tui'}/>],
    image: sort_img,
    subtitle: 'In-terminal sorting algorithms simulator',
    desc: 
        <p>
            Sort visualiser that simulates sorting algorithms on a bar chart, 
            rendered in terminal using {ratatui} crate 
            for accessible and portable viewing. 
            
            <hr></hr>

            When sorted, outputs number of comparisons performed and corresponding algorithms'
            time and space complexity. 
            
            <hr></hr>
            
            Provides terminal command line interface implemented 
            using {clap} crate 
            for ease of use.
        </p>
}; 

const weather_api = <Link title={"weatherapi.com"} link={"https://weatherapi.com"}/>;
export const weather_wallpaper = { 
    title: 'Weather Wallpaper',
    links: [<Link text='GitHub' link={'https://github.com/josh-ja-walker/weather_wallpaper'}/>],
    image: weather_wallpaper_img,
    subtitle: 'Weather-dependent desktop wallpaper engine',
    desc:
    <p>
            Wallpaper manager that dynamically changes desktop wallpaper to reflect local weather.

            <hr></hr>
            
            Provides interactive menu to set weather depicted in user supplied wallpapers, 
            then matches to data retrieved from {weather_api}
        </p>
};  

export const origame = { 
    title: 'Origame',
    links: [
        <Link text={'GitHub'} link={'https://github.com/josh-ja-walker/Origame'}/>,
        <Link text={'itch.io'} link={'https://joshwalker.itch.io/origame'}/>
    ],
    // image: origame_img,
    subtitle: '2D puzzle-platformer about folding paper',
    desc: 
        <p>
            2D puzzle-platformer game based on the central mechanic of folding platforms in 
            order to solve puzzles and progress through levels. 

            <hr></hr>
            
            Progressively introduces items and hazards that react with the environment, 
            resulting in interesting and dynamic puzzle solving that increase in difficulty. 

            <hr></hr>
            
            Developed for my A level Computing project; I achieved a final grade of A*.
        </p>
};  

export const bogosort = {
    title: 'Bogosort',
    links: [
        <Link text={'Website'} link={'https://josh-ja-walker.github.io/Bogosort/'}/>,
        <Link text={'GitHub'} link={'https://github.com/josh-ja-walker/Bogosort'}/>,
    ],
    // image: bogosort_img,
    subtitle: 'Sorting visualiser website',
    desc:
        <p>
            Website simulation of bogosort; bubble sort implemented as a contrasting sorting algorithm. 
        </p>
}; 

export const portfolio = {
    title: 'Portfolio',
    links: [<Link text={'GitHub'} link={'https://github.com/josh-ja-walker/portfolio'}/>],
    image: null,
    subtitle: "Personal professional portfolio",
    desc:
        <p>
            The website you are currently on
        </p>
}; 
