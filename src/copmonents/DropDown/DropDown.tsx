import React from 'react';
import  "./DropDown.css"
import UserName from "../UserName/UserName";
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropDown = () => {
    return (
        <>
            <div className='dropdown'>
                <div className="dropdown-top">
                    <div className='dropdown-item user-item'><UserName>Gospodarik Polina</UserName></div>
                    <div className='dropdown-item'>Home</div>
                    <div className='dropdown-item'>Add post</div>
                </div>
                <div className="dropdown-bottom">
                    <div className='dropdown-item'>
                        <div className='dropdown-item-icon'>
                            <FontAwesomeIcon className='dropdown-icon' icon={faSun}/>
                        </div>
                        <div className='dropdown-item-icon'>
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