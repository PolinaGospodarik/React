import "./SeletedPost.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faThumbsDown, faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {TPost} from "../../types/types";
import Title from "../Title/Title";
import {useContext} from "react";
import {themeContext} from "../../providers/ThemeContext";

const SelectedPost = ({post}:{post:TPost}) => {

    const [color, setColor] = useContext(themeContext);

    return (
        <>
            <div className='container'>
                <div className='container-number-post'>Home | {post.id}</div>
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
                        <button className="container__button"><FontAwesomeIcon icon={faBookmark} className="container__icon container__icon-bookmark"/> Add to favorites</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelectedPost;