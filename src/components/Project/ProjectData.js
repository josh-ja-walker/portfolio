import { Link } from '../Component';

import sort_img from './Pictures/sorts_tui-1.png';
import weather_wallpaper_img from './Pictures/weather_wallpaper-1.png';

const ratatui = <Link text={'ratatui'} link={'https://crates.io/crates/ratatui'}/>;
const clap = <Link text={'CLAP'} link={'https://crates.io/crates/clap'}/>;

export const sortsTUI = { 
    title: 'Sorts TUI',
    links: [<Link text='GitHub' link={'https://github.com/josh-ja-walker/sorts_tui'}/>],
    image: sort_img,
    subtitle: 'In-terminal sorting algorithms simulator',
    desc: 
        <p>
            Simulates sorting algorithms, rendering in terminal using {ratatui} crate. 
            <br></br>
            Provides terminal command line interface implemented using {clap} crate for ease of use.
        </p>
}; 


const weather_api = <Link text={"weatherapi.com"} link={"https://weatherapi.com"}/>;

export const weather_wallpaper = { 
    title: 'Weather Wallpaper',
    links: [<Link text='GitHub' link={'https://github.com/josh-ja-walker/weather_wallpaper'}/>],
    image: weather_wallpaper_img,
    subtitle: 'Weather-dependent desktop wallpaper engine',
    desc:
        <p>
            Dynamically changes desktop wallpaper to reflect local weather.
            <br></br>
            Provides interactive menu to set weather depicted in wallpapers and
            matches with data retrieved from {weather_api}
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
            Fold platforms in order to solve puzzles and progress through levels. 
            <br></br>
            Developed for my A level Computing project; achieved an A* grade.
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
            Website simulation of bogosort; bubble sort 
            implemented as a contrasting sorting algorithm. 
        </p>
}; 

export const portfolio = {
    title: 'Portfolio',
    links: [<Link text={'GitHub'} link={'https://github.com/josh-ja-walker/portfolio'}/>],
    image: null,
    subtitle: "Personal professional portfolio",
    desc: <p>The website you are currently on</p>
}; 
