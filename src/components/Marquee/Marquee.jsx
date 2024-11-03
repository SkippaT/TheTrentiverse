import classes from './marquee.module.css';
import HalfMarquee from './HalfMarquee';

export default function Marquee({ tags, direction, duration }) {
    

    return (
        <div className={classes.marquee}>
            <HalfMarquee tags={tags} direction={direction} duration={duration} />
            <HalfMarquee tags={tags} direction={direction} duration={duration} />
        </div>
    );
}