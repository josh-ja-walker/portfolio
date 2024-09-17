import { Link } from '../Component';

import sort_img from './Pictures/sorts_tui-1.png';
import weather_wallpaper_img from './Pictures/weather_wallpaper-1.png';

const ratatui = <Link text={'ratatui'} link={'https://crates.io/crates/ratatui'}/>;
const clap = <Link text={'CLAP'} link={'https://crates.io/crates/clap'}/>;

export const sortsTUI = { 
    title: 'Sorts TUI',
    subtitle: 'In-terminal sorting algorithms simulator',
    image: sort_img,
    links: [<Link text='GitHub' link={'https://github.com/josh-ja-walker/sorts_tui'}/>],
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
    subtitle: 'Weather-dependent desktop wallpaper engine',
    image: weather_wallpaper_img,
    links: [<Link text='GitHub' link={'https://github.com/josh-ja-walker/weather_wallpaper'}/>],
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
    subtitle: '2D puzzle-platformer about folding paper',
    image: null,
    links: [
        <Link text={'GitHub'} link={'https://github.com/josh-ja-walker/Origame'}/>,
        <Link text={'itch.io'} link={'https://joshwalker.itch.io/origame'}/>
    ],
    desc: 
        <p>
            Fold platforms in order to solve puzzles and progress through levels. 
            <br></br>
            Developed for my A level Computing project; achieved an A* grade.
        </p>
};  


export const bogosort = {
    title: 'Bogosort',
    subtitle: 'Sorting visualiser website',
    image: null,
    links: [
        <Link text={'Website'} link={'https://josh-ja-walker.github.io/Bogosort/'}/>,
        <Link text={'GitHub'} link={'https://github.com/josh-ja-walker/Bogosort'}/>,
    ],
    desc:
        <p>
            Website simulation of bogosort; bubble sort 
            implemented as a contrasting sorting algorithm. 
        </p>
}; 


export const portfolio = {
    title: 'Portfolio',
    subtitle: "Personal professional portfolio",
    image: null,
    links: [<Link text={'GitHub'} link={'https://github.com/josh-ja-walker/portfolio'}/>],
    desc: <p>The website you are currently on</p>
}; 
