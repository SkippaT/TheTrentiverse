import Modal from '../UI/Modal';
import classes from './Experience.module.css'

export default function Experience({ experience, onClose }) {

    return (
        <Modal onClose={onClose}>
            <div className={classes.experience}>
                <h1>{experience.role}</h1>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginBottom: "30px",
                    gap: "10px"
                }}>
                    <h3>{experience.company}</h3>
                    <p>{experience.date}</p>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "10px"
                }}>
                    <div className={classes.split}>
                        <h2>Roles and Responsibilities</h2>
                        <ul>
                            {experience.rolesAndResponsibilities.map((role, index) => (
                                <li key={index}>{role}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={classes.split}>
                        <h2>Skills Utilised</h2>
                        <ul>
                            {experience.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Modal>
    );
}