import "./PostCardMedium.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark as regularBookmark, faBookmark, faThumbsDown, faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {faBookmark as solidBookmark, faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {TFavoritePost} from "../../types/types";
import {useContext} from "react";
import {themeContext} from "../../providers/ThemeContext";

const PostCardMedium = ({ id, image, date, title, onFavoriteToggle, isFavorite}: TFavoritePost) => {

    const [color, setColor] = useContext(themeContext);

    return (
        <>
            <div>
                <div className="medium-card">
                    <div className="medium-card__content">
                        <div className="medium-card__wrap-image">
                            <img src={image} alt={title} className="medium-card__image"/>
                        </div>
                        <span className="medium-card__date">{date}</span>
                        <h2 className={`medium-card__title title-${color}`}>{title}</h2>
                    </div>
                    <div className={`medium-card__icons card__icons-${color}`}>
                        <div className="medium-card__icons-left">
                            <button><FontAwesomeIcon icon={faThumbsUp} className={`medium-card__icon card__icon-${color} medium-card__icon-like`}/></button>
                            <button><FontAwesomeIcon icon={faThumbsDown} className={`medium-card__icon card__icon-${color} medium-card__icon-dislike`}/></button>
                        </div>
                        <div className="medium-card__icons-right">
                            <button onClick={(event) => onFavoriteToggle(event, { id, image, date, title})}><FontAwesomeIcon icon={isFavorite ? solidBookmark :regularBookmark} className={`medium-card__icon card__icon-${color} medium-card__icon-bookmark` }/></button>
                            <button><FontAwesomeIcon icon={faEllipsis} className={`medium-card__icon card__icon-${color} medium-card__icon-menu`}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostCardMedium;