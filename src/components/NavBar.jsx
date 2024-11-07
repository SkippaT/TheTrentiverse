import Dropdown from './UI/Dropdown.jsx';
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
        },
    ];

    return (
        <div className={classes.navBar}>
            <a href="#" style={{fontWeight: "bold", fontSize: "1.2rem"}}>The Trentiverse</a>
            <button className={`${classes.toggleMenu} material-symbols-outlined`}>menu</button>
            {/* <button class="toggle-menu"><i class="fa-solid fa-bars"></i></button> */}
            <div className={classes.links}>
                <a href="#projects-section">Projects</a>
                <a href="#experience-section">Experience</a>

                <Dropdown title="About Me" links={links} />

                <a href="./TrentMitchellCV.pdf" target="blank">Resume</a>
                <a href="#contact-me-section">Contact</a>
            </div>
        </div>
    );
}