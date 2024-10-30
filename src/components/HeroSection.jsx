import memoji from "../assets/memoji.png";
import classes from './HeroSection.module.css';

export default function HeroSection() {

    return (
        <div className={classes.heroSection}>
            <div className={`${classes.left} ${classes.split}`}>
                <h1>Trent Mitchell</h1>
                <h3>Engineering Student</h3>
                <div className={classes.buttons}>
                    <button>Resumé</button>
                    <button>Contact</button>
                </div>
            </div>
            <div className={`${classes.right} ${classes.split}`}>
                <img src={memoji} alt="Emoji image of Me" />
            </div>
        </div>
    );
}