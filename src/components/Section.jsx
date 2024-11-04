import classes from './Section.module.css';

export default function Section({ sectionName, children }) {

    return (
        <div className={classes.section}>
            <h1 className={classes.sectionTitle}>{sectionName}</h1>
            {children}
        </div>
    );
}