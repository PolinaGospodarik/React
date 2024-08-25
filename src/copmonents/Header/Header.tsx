import React, { useState } from 'react';
import UserName from "../UserName/UserName";
import  "./Header.css"
import { faMagnifyingGlass, faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDown from "../DropDown/DropDown";



const Header = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
        <>
            <header className="header">
                <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="header-left">
                    { isDropdownOpen ? <FontAwesomeIcon icon={faXmark} className="menu icon"/> :  <FontAwesomeIcon icon={faBars} className="menu icon"/> }
                </div>
                <div className="header-right">
                    <div className="search"><FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon icon"/></div>
                    <UserName>Gospodarik Polina</UserName>
                </div>
            </header>
            {isDropdownOpen ? <DropDown></DropDown> : null}
        </>
    );
};

export default Header;