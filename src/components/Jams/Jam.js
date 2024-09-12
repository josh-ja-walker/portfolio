import {Project} from '../Project/Project'

import * as submission from './JamData';

/* List of game jams participated in */
export default function JamSection() {
    return (
        <div className='Section'>
            <header>Game Jams</header>

            <ul className="List">
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
            <Project {...props}/>
        </li>
    );
}
