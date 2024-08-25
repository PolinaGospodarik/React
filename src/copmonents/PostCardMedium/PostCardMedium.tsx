import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faThumbsDown, faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";

import "./PostCardMedium.css"

type Tcards = {
    id: number,
    image: string,
    date: string,
    title: string
}

const PostCardMedium = ({image, date, title}: Tcards) => {
    return (
        <>
            <div>
                <div className="medium-card">
                    <div className="medium-card__content">
                        <div className="medium-card__wrap-image">
                            <img src={image} alt={title} className="medium-card__image"/>
                        </div>
                        <span className="medium-card__date">{date}</span>
                        <h2 className="medium-card__title title-light">{title}</h2>
                    </div>
                    <div className="medium-card__icons card__icons-light">
                        <div className="medium-card__icons-left">
                            <button><FontAwesomeIcon icon={faThumbsUp} className="medium-card__icon card__icon-light medium-card__icon-like"/></button>
                            <button><FontAwesomeIcon icon={faThumbsDown} className="medium-card__icon card__icon-light medium-card__icon-dislike"/></button>
                        </div>
                        <div className="medium-card__icons-right">
                            <button><FontAwesomeIcon icon={faBookmark} className="medium-card__icon card__icon-light medium-card__icon-bookmark"/></button>
                            <button><FontAwesomeIcon icon={faEllipsis} className="medium-card__icon card__icon-light medium-card__icon-menu"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostCardMedium;