    import React, {useState} from 'react';
    import  "./Header.css"
    import UserName from "../UserName/UserName";
    import DropDown from "../DropDown/DropDown";
    import { faMagnifyingGlass, faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import {useNavigate} from "react-router-dom";
    import {useDispatch, useSelector} from "react-redux";
    import {clearSearch, SearchPost, setSearchValue} from "../../slice/blog";


    const Header = () => {

        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const [isSearchOpen, setIsSearchOpen] = useState(false);

        const  [inputText, SetInputText]= useState("");
        const dispatch = useDispatch<any>();
        const data = useSelector((item: any)=> item.blog.search)
        const searchValue = useSelector((state: any) => state.blog.searchValue);
        const nav = useNavigate();

        // console.log(data.results);

        const handleSearch = () => {
            setIsSearchOpen(!isSearchOpen);
            if (!isSearchOpen) {
                nav("/search");
            } else {
                nav("/");
                dispatch(clearSearch());
            }
        }

        const SearchText = (value: string) => {
            dispatch(setSearchValue(value));
            if (value.trim() === "") {
                dispatch(clearSearch());
            } else {
                dispatch(SearchPost({search: value, offset: 0}));
            }
        }

        return (
            <>
                <header className="header">
                    <div className="header-left">
                        <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>{ isDropdownOpen ? <FontAwesomeIcon icon={faXmark} className="menu icon"/> :  <FontAwesomeIcon icon={faBars} className="menu icon"/> }</div>
                        {isSearchOpen &&
                            <div className="search-input-wrapper">
                                <input type="text" className="search-input" placeholder="Search..."  value={searchValue} onChange={(event)=>{SearchText(event.target.value)}}/>
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