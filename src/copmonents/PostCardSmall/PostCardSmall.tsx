import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faThumbsDown, faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import "./PostCardSmall.css"

type Tcards = {
    id: number,
    image: string,
    date: string,
    title: string,
}

const PostCardSmall = ({image, date, title}: Tcards) => {
    return (
        <>
            <div className="small-card">
                <div className="small-card__content">
                    <div className="small-card__content-left">
                        <span className="small-card__date">{date}</span>
                        <h2 className="small-card__title title-light">{title}</h2>
                    </div>
                    <div className="small-card__content-right">
                        <div className="small-card__wrap-image">
                            <img src={image} alt={title} className="small-card__image"/>
                        </div>
                    </div>
                </div>
                <div className="small-card__icons card__icons-light">
                    <div className="small-card__icons-left">
                        <button><FontAwesomeIcon icon={faThumbsUp} className="small-card__icon card__icon-light small-card__icon-like"/></button>
                        <button><FontAwesomeIcon icon={faThumbsDown} className="small-card__icon card__icon-light small-card__icon-dislike"/></button>
                    </div>
                    <div className="small-card__icons-right">
                        <button><FontAwesomeIcon icon={faBookmark} className="small-card__icon card__icon-light small-card__icon-bookmark"/></button>
                        <button><FontAwesomeIcon icon={faEllipsis} className="small-card__icon card__icon-light small-card__icon-menu"/></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostCardSmall;