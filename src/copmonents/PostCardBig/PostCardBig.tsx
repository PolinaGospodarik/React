import './PostCardBig.css'
// import { useDispatch, useSelector } from "react-redux";
import { faThumbsUp, faThumbsDown, faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {TFavoritePost} from "../../types/types";
import React, {useContext, useState} from "react";
import {themeContext} from "../../providers/ThemeContext";
// import { addToFavorites, removeFromFavorites } from "../../slice/blog";

const PostCardBig = ({ id, image, date, title, description, onFavoriteToggle, isFavorite }: TFavoritePost)=>{

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
                        <button onClick={(event) => onFavoriteToggle(event,{ id, image, date, title, description})}>
                            <FontAwesomeIcon icon={isFavorite ? solidBookmark :regularBookmark} className={`big-card__icon card__icon-${color} big-card__icon-bookmark`}/>
                        </button>
                        <button><FontAwesomeIcon icon={faEllipsis} className={`big-card__icon card__icon-${color} big-card__icon-menu`}/></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostCardBig;