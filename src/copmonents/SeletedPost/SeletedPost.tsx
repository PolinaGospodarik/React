import React from 'react';
import "./SeletedPost.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faThumbsDown, faThumbsUp} from "@fortawesome/free-regular-svg-icons";


type Tcards = {
    id: number,
    image: string,
    title: string,
    description: string,
    lesson_num: number,
}

const SeletedPost = ({image, title, description, lesson_num}: Tcards) => {
    return (
        <>
            <div className='container'>
                <div className='container-number-post'>Home | {lesson_num}</div>
                <div className='container-title title-light'>{title}</div>
                <div className='container-photo'>
                    <img src={image} alt='photo' className='photo'/>
                </div>
                <div className='container-description'>{description}</div>
                <div className="container__icons">
                    <div className="container__icons-left">
                        <button className="container__button"><FontAwesomeIcon icon={faThumbsUp} className="container__icon container__icon-like"/></button>
                        <button className="container__button"><FontAwesomeIcon icon={faThumbsDown} className="container__icon container__icon-dislike"/></button>
                    </div>
                    <div className="container__icons-right">
                        <button className="container__button"><FontAwesomeIcon icon={faBookmark} className="container__icon container__icon-bookmark"/> Add to favorites</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SeletedPost;