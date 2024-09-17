import { Link } from '../Component';

// import painball_img from './Pictures/painball.png';

export const painball = {
    title: 'Painball',
    links: [
        <Link text={'GitHub'} link={'https://github.com/josh-ja-walker/Painball'}/>,
        <Link text={'itch.io'} link={'https://joshwalker.itch.io/painball'}/>,
        <Link text={'Ludwig Jam'} link={'https://itch.io/jam/ludwig-2021/rate/1248951'}/>
    ],
    // image: painball_img,
    subtitle: 'Ludwig Jam (Foddian)',
    desc: 
        <p>
            Foddian pinball game, emulating the frustration of popular Bennett Foddy games.
            <br></br>
            Developed for Ludwig Jam 2021, it was highly rated during the jam.
        </p>
}

export const hexatris = {
    title: 'Hexatris',
    links: [
        <Link text={'GitHub'} link={'https://github.com/josh-ja-walker/hexatris'}/>,
        <Link text={'itch.io'} link={'https://joshwalker.itch.io/hexatris'}/>,
        <Link text={'Ludum Dare'} link={'https://ldjam.com/events/ludum-dare/49/hexatris'}/>
    ],
    image: null,
    subtitle: 'Ludum Dare (Unstable)',
    desc: 
        <p>
            Stack hexagonal shaped blocks on a precarious island. 
            <br></br>
            Inspired by Jenga and Tetris, Hexatris was developed in 
            48 hours for the long running game jam Ludum Dare.
        </p>
}

export const balls_in_holes = {
    title: 'Balls in Holes',
    links: [
        <Link text={'itch.io'} link={'https://joshwalker.itch.io/ballsinholes'}/>,
        <Link text={'Kenney Jam'} link={'https://itch.io/jam/kenney-jam-2021'}/>,
    ],
    image: null,
    subtitle: 'Kenney Jam (Rotation)',
    desc: 
        <p>
            Golf game made with assets provided by the host of jam, Kenney, 
            notable in the community for his high quality free assets.
        </p>
}

export const amazeing = {
    title: "It's so Amazeing",
    links: [
        <Link text={"itch.io"} link={'https://joshwalker.itch.io'}/>,
        <Link text={"LowRezJam"} link={'https://itch.io/jam/lowrezjam-2021'}/>,
    ],
    image: null,
    subtitle: 'LowRezJam',
    desc: <p>Atmospheric maze game export constrained by the 64 x 64 resolution.</p>
}

export const zombusiness = {
    title: 'None of your Zombusiness',
    links: [
        <Link text={'itch.io'} link={'https://joshwalker.itch.io/none-of-your-zombusiness'}/>,
        <Link text={'Brackeys Jam'} link={'https://itch.io/jam/brackeys-5/rate/928787'}/>,
    ],
    image: null,
    subtitle: 'Brackeys Jam (Stronger Together)',
    desc: 
        <p>
            My first game: a 2D top-down shooter, initially intended to 
            be a dynamic tower-defense game.
            <br></br>
            I learnt invaluable lessons about limiting a design appetite, 
            especially within the confines of a tight deadline.
        </p>
}
