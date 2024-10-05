import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark as regularBookmark, faBookmark, faThumbsDown, faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {faBookmark as solidBookmark, faEllipsis} from "@fortawesome/free-solid-svg-icons";
import "./PostCardSmall.css"
import {TFavoritePost} from "../../types/types";
import {useContext} from "react";
import {themeContext} from "../../providers/ThemeContext";

const PostCardSmall = ({ id, image, date, title, onFavoriteToggle, isFavorite }: TFavoritePost) => {

    const [color, setColor] = useContext(themeContext);

    return (
        <>
            <div className="small-card">
                <div className="small-card__content">
                    <div className="small-card__content-left">
                        <span className="small-card__date">{date}</span>
                        <h2 className={`small-card__title title-${color}`}>{title}</h2>
                    </div>
                    <div className="small-card__content-right">
                        <div className="small-card__wrap-image">
                            <img src={image} alt={title} className="small-card__image"/>
                        </div>
                    </div>
                </div>
                <div className={`small-card__icons card__icons-${color}`}>
                    <div className="small-card__icons-left">
                        <button><FontAwesomeIcon icon={faThumbsUp} className={`small-card__icon card__icon-${color} small-card__icon-like`}/></button>
                        <button><FontAwesomeIcon icon={faThumbsDown} className={`small-card__icon card__icon-${color} small-card__icon-dislike`}/></button>
                    </div>
                    <div className="small-card__icons-right">
                        <button onClick={(event) => onFavoriteToggle(event, { id, image, date, title})}><FontAwesomeIcon icon={isFavorite ? solidBookmark :regularBookmark} className={`small-card__icon card__icon-${color} small-card__icon-bookmark`}/></button>
                        <button><FontAwesomeIcon icon={faEllipsis} className={`small-card__icon card__icon-${color} small-card__icon-menu`}/></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostCardSmall;