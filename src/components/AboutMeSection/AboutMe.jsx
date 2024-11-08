import Button from '../UI/Button';
import classes from './AboutMe.module.css';

export default function AboutMe() {

    return (
        <div className={classes.aboutMe}>
            <div className={classes.links}>
                <Button text="Studies"></Button>
                <Button text="Technical Skills"></Button>
                <Button text="Soft Skills"><a href=""></a></Button>
                
            </div>
        </div>
    );
}