import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./PostSearch.css";
import {faBookmark, faThumbsDown, faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {themeContext} from "../../providers/ThemeContext";
import {TPost} from "../../types/types";

const PostSearch = ({image, date, title}: TPost) => {

    const [color, setColor] = useContext(themeContext);

    return (
        <>
            <div className="search-card">
                <div className="search-card__content">
                    <div className="search-card__content-left">
                        <div className="search-card__wrap-image">
                            <img src={image} alt={title} className="search-card__image"/>
                        </div>
                    </div>
                    <div className="search-card__content-right">
                        <span className="search-card__date">{date}</span>
                        <h2 className={`search-card__title title-${color}`}>{title}</h2>
                    </div>
                </div>
                <div className={`search-card__icons card__icons-${color}`}>
                    <div className="search-card__icons-left">
                        <button>
                            <FontAwesomeIcon icon={faThumbsUp} className={`search-card__icon card__icon-${color} search-card__icon-like`}/>
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faThumbsDown} className={`search-card__icon card__icon-${color} search-card__icon-dislike`}/>
                        </button>
                    </div>
                    <div className="search-card__icons-right">
                        <button>
                            <FontAwesomeIcon icon={faBookmark} className={`search-card__icon card__icon-${color} search-card__icon-bookmark`}/>
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faEllipsis} className={`search-card__icon card__icon-${color} search-card__icon-menu`}/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostSearch;