import {Project} from '../Project/Project'

import * as submission from './JamData';

/* List of game jams participated in */
export default function JamSection() {
    return (
        <div className='jams section'>
            <header>Game Jams</header>

            <ul className='no-bull-list'>
                <JamSubmission {...submission.painball}/>
                <JamSubmission {...submission.hexatris}/>
                <JamSubmission {...submission.balls_in_holes}/>
                <JamSubmission {...submission.amazeing}/>
                <JamSubmission {...submission.zombusiness}/>
            </ul>
        </div>
    )
}

/* Game Jam submission */
function JamSubmission(props) {
    return (
        <li>
            <div className='jam'>
                <Project {...props}/>
            </div>
        </li>
    );
}
