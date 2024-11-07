import classes from './Project.module.css';

export default function ProjectTeaser({ project }) {

    return (
        <div className={classes.projectTeaser}>
            <h1 className={classes.projectTitle}>{project.name}</h1>
            <div className={classes.container}>
                <div className={`${classes.descriptionSplit} ${classes.split}`}>
                    <h3>{project.subheading}</h3>
                    <p>{project.description}</p>
                    <ol>
                        {project.skills.map((skill) => (
                            <li key={skill}><span className={classes.tag}>{skill}</span></li>
                        ))}
                    </ol>
                </div>
                <div className={`${classes.right} ${classes.split}`}>
                    <img src={project.image} alt={project.imageDescription} />
                </div>
            </div>
        </div>
    );
}