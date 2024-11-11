import classes from './ProficiencyBar.module.css';

export default function ProficiencyBar({ proficiency }) {

    let proficiencyNum = 1;

    if (proficiency === 'beginner') {
        proficiencyNum = 1;
    } else if (proficiency === 'intermediate') {
        proficiencyNum = 2;
    } else if (proficiency === 'advanced') {
        proficiencyNum = 3;
    } else if (proficiency === 'expert') {
        proficiencyNum = 4;
    }

    return (
        <div className={classes.bar}>
            <div className={`${classes.segment} ${proficiencyNum >= 1 ? classes.beginner : ''}`} />
            <div className={`${classes.segment} ${proficiencyNum >= 2 ? classes.intermediate : ''}`} />
            <div className={`${classes.segment} ${proficiencyNum >= 3 ? classes.advanced : ''}`} />
            <div className={`${classes.segment} ${proficiencyNum >= 4 ? classes.expert : ''}`} />
        </div>
    );
}