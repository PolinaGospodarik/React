import "./Footer.css"
import {useContext} from "react";
import {themeContext} from "../../providers/ThemeContext";

const Footer = () => {

    const [color, setColor] = useContext(themeContext);

    return (
        <>
            <footer className="footer">
                <div className={`footer__container footer__container-${color}`}>
                    <div className="footer-block-text">©2024 Blogfolio</div>
                    <div className="footer-block-text">All rights reserved</div>
                </div>
            </footer>
        </>
    );
};

export default Footer;