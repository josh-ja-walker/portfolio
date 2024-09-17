import { Link } from '../Component';

const ratatui = <Link text={'Ratatui.rs'} link={'https://crates.io/crates/ratatui'}/>;
const clap = <Link text={'CLAP'} link={'https://crates.io/crates/clap'}/>;

export const sortsTUI = { 
    title: 'Sorts TUI',
    subtitle: 'In-terminal sorting algorithms simulator',
    image: null,
    langs: ['Rust', ratatui, clap],
    links: [<Link text='GitHub' link={'https://github.com/josh-ja-walker/sorts_tui'}/>],
    desc: 
        <p>
            Simulates sorting algorithms on a bar chart, rendering each step in terminal.
            <br></br>
            Provides terminal command line interface for ease of use.
        </p>
}; 


const weather_api = <Link text={'WeatherAPI'} link={'https://www.weatherapi.com'}/>;

export const weather_wallpaper = { 
    title: 'Weather Wallpaper',
    subtitle: 'Weather-dependent desktop wallpaper engine',
    image: null,
    langs: ['Rust', weather_api, clap],
    links: [<Link text='GitHub' link={'https://github.com/josh-ja-walker/weather_wallpaper'}/>],
    desc:
        <p>
            Dynamically changes desktop wallpaper to reflect local weather.
            <br></br>
            Provides interactive menu to set tags representing the weather depicted in wallpapers.
        </p>
};  


export const origame = { 
    title: 'Origame',
    subtitle: '2D puzzle-platformer about folding paper',
    image: null,
    langs: ['Unity', 'C#'],
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
    langs: ['HTML', 'CSS', 'JS'],
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
    langs: ['ReactJS', 'HTML', 'CSS'],
    links: [<Link text={'GitHub'} link={'https://github.com/josh-ja-walker/portfolio'}/>],
    desc: <p>The website you are currently on</p>
}; 
