import { useEffect, useState } from "react";
import memoji from "../assets/memoji.png";
import classes from './HeroSection.module.css';

const slogans = ["Engineering Student", "Tech Hobbyist", "Circuitry Connoisseur", "Code Whisperer"];

export default function HeroSection() {

    const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {

        const interval = setInterval(() => {
            setIsVisible(false); // Start fade out

            setTimeout(() => {
                setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
                setIsVisible(true); // Start fade in
            }, 1000); // Duration of the fade out

        }, 4000); // Change the slogan every 4 seconds

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className={classes.heroSection}>
            <div className={`${classes.left} ${classes.split}`}>
                <h1>Trent Mitchell</h1>
                <h3 className={`${classes.fade} ${!isVisible ? classes.hidden : ''}`}>
                    {slogans[currentSloganIndex]}
                </h3>
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