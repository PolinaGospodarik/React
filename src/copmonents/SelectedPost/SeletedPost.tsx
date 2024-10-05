import "./SeletedPost.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark as regularBookmark, faBookmark, faThumbsDown, faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {faBookmark as solidBookmark} from "@fortawesome/free-solid-svg-icons";
import {TPost} from "../../types/types";
import Title from "../Title/Title";
import {useContext, useState} from "react";
import {themeContext} from "../../providers/ThemeContext";
import {useNavigate} from "react-router-dom";
import {addToFavorites, removeFromFavorites} from "../../slice/blog";
import {useDispatch, useSelector} from "react-redux";



const SelectedPost = ({post}:{post:TPost}) => {

    const [color, setColor] = useContext(themeContext);
    const nav = useNavigate();

    const favorites = useSelector((state:any) => state.blog.favorites);
    const dispatch = useDispatch();

    const isFavorite = favorites.some((favoritePost:TPost) => favoritePost.id === post.id);

    const handleFavorites = (post: TPost) => {
        if (isFavorite) {
            dispatch(removeFromFavorites(post.id));
        } else {
            dispatch(addToFavorites(post));
        }
    };

    return (
        <>
            <div className='container'>
                <div onClick={ () => nav("/")} className='container-number-post'>Home | {post.id}</div>
                <div className='container-title'><Title>{post.title}</Title></div>
                <div className='container-photo'>
                    <img src={post.image} alt='photo' className='photo'/>
                </div>
                <div className='container-description'>{post.description}</div>
                <div className={`container__icons container__icons-${color}`}>
                    <div className="container__icons-left">
                        <button className="container__button"><FontAwesomeIcon icon={faThumbsUp} className="container__icon container__icon-like"/></button>
                        <button className="container__button"><FontAwesomeIcon icon={faThumbsDown} className="container__icon container__icon-dislike"/></button>
                    </div>
                    <div className="container__icons-right">
                        <button className="container__button" onClick={()=>handleFavorites(post)}>
                            <FontAwesomeIcon icon={isFavorite ? solidBookmark :regularBookmark} className="container__icon container__icon-bookmark"/> Add to favorites
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelectedPost;