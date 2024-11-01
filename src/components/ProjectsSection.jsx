import Project from './Project.jsx';
import classes from './ProjectsSection.module.css';

export default function ProjectsSection() {

    return (
        <div className={classes.projectsSection}>
            <h1 style={{fontSize: "64px"}}>My Projects</h1>
            <Project />
            <Project />
        </div>
    );
}