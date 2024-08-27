import './PostCardBig.css'
import { faThumbsUp, faThumbsDown, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {TPost} from "../../types/types";
import {useContext} from "react";
import {themeContext} from "../../providers/ThemeContext";


const PostCardBig = ({image, date, title, description}: TPost) => {

    const [color, setColor] = useContext(themeContext);

    return (
        <>
            <div className="big-card">
                <div className="big-card__content">
                    <div className="big-card__content-left">
                        <span className="big-card__date">{date}</span>
                        <h2 className={`big-card__title title-${color}`}>{title}</h2>
                        <p className="big-card__description">{description}</p>
                    </div>
                    <div className="big-card__content-right">
                        <div className="big-card__wrap-image">
                            <img src={image} alt={title} className="big-card__image"/>
                        </div>
                    </div>
                </div>
                <div className={`big-card__icons card__icons-${color}`}>
                    <div className="big-card__icons-left">
                        <button><FontAwesomeIcon icon={faThumbsUp} className={`big-card__icon card__icon-${color} big-card__icon-like`}/></button>
                        <button><FontAwesomeIcon icon={faThumbsDown} className={`big-card__icon card__icon-${color} big-card__icon-dislike`}/></button>
                    </div>
                    <div className="big-card__icons-right">
                        <button><FontAwesomeIcon icon={faBookmark} className={`big-card__icon card__icon-${color} big-card__icon-bookmark`}/></button>
                        <button><FontAwesomeIcon icon={faEllipsis} className={`big-card__icon card__icon-${color} big-card__icon-menu`}/></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostCardBig;