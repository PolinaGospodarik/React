import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./PostSearch.css";
import {faBookmark as regularBookmark, faBookmark, faThumbsDown, faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {faBookmark as solidBookmark, faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {themeContext} from "../../providers/ThemeContext";
import {TFavoritePost} from "../../types/types";

const PostSearch = ({id, image, date, title, onFavoriteToggle, isFavorite}: TFavoritePost) => {

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
                        <button onClick={(event) => onFavoriteToggle(event,{ id, image, date, title})}>
                            <FontAwesomeIcon icon={isFavorite ? solidBookmark :regularBookmark} className={`search-card__icon card__icon-${color} search-card__icon-bookmark`}/>
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