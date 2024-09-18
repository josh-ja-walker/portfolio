import { Link } from '../Component';


export const portfolio = {
    title: <Link text={'Portfolio'} link={'https://github.com/josh-ja-walker/portfolio'}/>,
    subtitle: "Personal professional portfolio",
    year: '2024',
    langs: ['ReactJS', 'HTML', 'CSS'],
    desc: <p>The website you are currently on</p>
}; 

const ratatui = <Link text={'Ratatui.rs'} link={'https://crates.io/crates/ratatui'}/>;
const clap = <Link text={'CLAP'} link={'https://crates.io/crates/clap'}/>;

export const sortsTUI = { 
    title: <Link text='Sorts TUI' link={'https://github.com/josh-ja-walker/sorts_tui'}/>,
    subtitle: 'in-terminal sorting algorithms simulator',
    year: '2023 - 2024',
    langs: ['Rust', ratatui, clap],
    desc: 
        <p>
            Simulates sorting algorithms on a bar chart, rendering each step in terminal.
            <br></br>
            Provides terminal command line interface for ease of use.
        </p>
}; 


const weather_api = <Link text={'WeatherAPI'} link={'https://www.weatherapi.com'}/>;

export const weather_wallpaper = { 
    title: <Link text='Weather Wallpaper' link={'https://github.com/josh-ja-walker/weather_wallpaper'}/>,
    subtitle: 'in-terminal wallpaper engine',
    year: '2022 - 2024',
    langs: ['Rust', weather_api, clap],
    desc:
        <p>
            Dynamically changes desktop wallpaper to reflect local weather.
            <br></br>
            Provides interactive menu to set tags representing the weather depicted in wallpapers.
        </p>
};  


export const origame = { 
    title: <Link text={'Origame'} link={'https://joshwalker.itch.io/origame'}/>,
    subtitle: '2D puzzle-platformer about folding paper',
    year: '2022',
    langs: ['Unity', 'C#'],
    desc: 
        <p>
            Fold platforms in order to solve puzzles and progress through levels. 
            <br></br>
            Developed for my A level Computing project; achieved an A* grade.
        </p>
};  


export const bogosort = {
    title: <Link text={'Bogosort'} link={'https://josh-ja-walker.github.io/Bogosort/'}/>,
    subtitle: 'Sorting visualiser website',
    year: '2022',
    langs: ['HTML', 'CSS', 'JS'],
    desc:
        <p>
            Website simulation of bogosort; bubble sort 
            implemented as a contrasting sorting algorithm. 
        </p>
}; 
