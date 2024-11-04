import classes from './Project.module.css';
import Modal from '../Modal.jsx';

export default function FullProject({ project, onClose }) {

    return (
        <Modal project={project} onClose={onClose}>
            <div className={classes.fullProject}>
                <h1>{project.name}</h1>
                <div className={classes.container}>
                    <div className={`${classes.descriptionSplit} ${classes.split}`}>
                        <h2>{project.subheading}</h2>
                        <p>{project.description}</p>
                        <ol>
                            {project.skills.map((skill) => (
                                <li key={skill}><span className={classes.tag}>{skill}</span></li>
                            ))}
                        </ol>
                        {project.purpose && <h2>Purpose</h2>}
                        <p>{project.purpose}</p>

                        {project.apprach && <h2>Approach</h2>}
                        <p>{project.apprach}</p>

                        {project.challenges && <h2>Challenges</h2>}
                        <p>{project.challenges}</p>

                        {project.outcome && <h2>Outcome</h2>}
                        <p>{project.outcome}</p>

                        {project.lessonsLearned && <h2>Lessons Learned</h2>}
                        <p>{project.lessonsLearned}</p>
                    </div>
                    <div className={`${classes.imgSplit} ${classes.split}`}>
                        <img src={project.image} alt={project.imageDescription} />
                    </div>
                </div>
            </div>
        </Modal>
    );
}