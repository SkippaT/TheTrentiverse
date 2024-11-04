import Project from './Project.jsx';
import { PROJECTS } from '../../data.js';

export default function Projects() {

    return (
        <div>
            <ul>
                {PROJECTS.map((project) => (
                    <li key={project.name}><Project project={project} /></li>
                ))}
            </ul>
        </div>
    );
}