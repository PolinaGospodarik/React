import  "./DropDown.css"
import UserName from "../UserName/UserName";
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useContext} from "react";
import {themeContext} from "../../providers/ThemeContext";
import {Link} from "react-router-dom";

const DropDown = () => {

    const [color, setColor] = useContext(themeContext);

    return (
        <>
            <div className='dropdown'>
                <div className="dropdown-top">
                    <div className='dropdown-item user-item'><UserName>Gospodarik Polina</UserName></div>
                    <Link to="/" className='dropdown-item'>Home</Link>
                    <div className='dropdown-item'>Add post</div>
                </div>
                <div className="dropdown-bottom">
                    <div className='dropdown-item'>
                        <div className='dropdown-item-icon' onClick={() => setColor("light")}>
                            <FontAwesomeIcon className='dropdown-icon' icon={faSun}/>
                        </div>
                        <div className='dropdown-item-icon' onClick={() => setColor("dark")}>
                            <FontAwesomeIcon className='dropdown-icon' icon={faMoon}/>
                        </div>
                    </div>
                    <div className='dropdown-item dropdown-item__button'>
                        <button>Log Out</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DropDown;