import Project from './Project.jsx';
import classes from './ProjectsSection.module.css';
import { PROJECTS } from '../projects.js';

export default function ProjectsSection() {

    return (
        <div className={classes.projectsSection}>
            <h1 style={{fontSize: "64px"}}>My Projects</h1>

            <ul>
                {PROJECTS.map((project) => (
                    <li key={project.name}><Project {...project} /></li>
                ))}
            </ul>
        </div>
    );
}