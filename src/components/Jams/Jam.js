import {ProjectSection, Project, ProjectCmp} from '../Project/Project'

import * as jam_data from './JamData';

const all_jams = [
    jam_data.painball,
    jam_data.hexatris,
    jam_data.balls_in_holes,
    jam_data.amazeing,
    jam_data.zombusiness
].sort(ProjectCmp);

/* List of game jams participated in */
export default function Jams() {
    const jams = all_jams.map(jam => <Jam {...jam}/>);
    return <ProjectSection header={'Game Jams'} projects={jams}/>;
}

/* Game Jam submission */
function Jam(props) {
    return (
        <div className='jam'>
            <Project {...props}/>
            {/* TODO: any jam specific things */}
        </div>
    );
}
