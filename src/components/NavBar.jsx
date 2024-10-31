import Dropdown from './Dropdown';
import classes from './NavBar.module.css';

export default function NavBar() {

    const links = [
        {
            name: "Studies",
            link: "#about-me-section"
        },
        {
            name: "Technical Skills",
            link: "#tech-section"
        },
        {
            name: "Soft Skills",
            link: "#soft-section"
        }
    ];

    return (
        <div className={classes.navBar}>
            <a href="#">The Trentiverse</a>
            <button className={`${classes.toggleMenu} material-symbols-outlined`}>menu</button>
            {/* <button class="toggle-menu"><i class="fa-solid fa-bars"></i></button> */}
            <div className={classes.links}>
                <a href="#projects-section"><span className="code">01.</span> Projects</a>

                <div className={classes.dropdown}>
                    <a href="#about-me-section"><span className="code">02.</span>About Me</a>
                    <Dropdown links={links} />
                </div>

                <a href="./TrentMitchellCV.pdf" target="blank"><span className="code">03.</span> Resume</a>
                <a href="#contact-me-section"><span className="code">04.</span> Contact</a>
            </div>
        </div>
    );
}