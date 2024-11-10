import classes from './FlipCard.module.css';

export default function FlipCard({ title, proficiency, description }) {
    return (
        <div className={classes.card}>
            <div className={classes.upperPart}>
                <div className={classes.upperPartFace}>{proficiency}</div>
                <div className={classes.upperPartBack}>{description}</div>
            </div>
            <div className={classes.lowerPart}>
                <div className={classes.lowerPartFace}>{title}</div>
                <div className={classes.lowerPartBack}>{title}</div>
            </div>
        </div>
    );
}