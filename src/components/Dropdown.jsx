import classes from './NavBar.module.css';

export default function Dropdown({ links }) {

    return (
        <div className={classes.dropdownContent}>
            <ol style={{ listStyleType: "none" }}>
                {links.map((link, index) => (
                    <li><a href={link.link}>{link.name}</a></li>
                ))}
            </ol>
        </div>
    );
}