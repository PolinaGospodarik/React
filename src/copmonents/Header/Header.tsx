import React, { useState } from 'react';
import  "./Header.css"
import UserName from "../UserName/UserName";
import DropDown from "../DropDown/DropDown";
import { faMagnifyingGlass, faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";


const Header = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const nav = useNavigate();

    const handleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        {!isSearchOpen ?  nav("/search") : (nav("/"))}
    }

    return (
        <>
            <header className="header">
                <div className="header-left">
                    <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>{ isDropdownOpen ? <FontAwesomeIcon icon={faXmark} className="menu icon"/> :  <FontAwesomeIcon icon={faBars} className="menu icon"/> }</div>
                    {isSearchOpen &&
                        <div className="search-input-wrapper">
                            <input type="text" className="search-input" placeholder="Search..."/>
                        </div>}
                </div>
                <div className="header-right">
                    <div onClick={handleSearch} className="search"><FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon icon"/></div>
                    <UserName>Gospodarik Polina</UserName>
                </div>
            </header>

            {isDropdownOpen && <DropDown></DropDown>}
        </>
    );
};

export default Header;