import './PostList.css';
import PostCardBig from '../PostCardBig/PostCardBig';
import PostCardMedium from '../PostCardMedium/PostCardMedium';
import PostCardSmall from '../PostCardSmall/PostCardSmall';
import {TPost} from "../../types/types";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../slice/blog";
import { useEffect } from "react";

const PostList = ({posts}: {posts: TPost[]}) => {

    const favorites = useSelector((state:any) => state.blog.favorites);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(favorites);
    }, [favorites]);

    const handleFavorites = (event: React.MouseEvent, post: TPost) => {
        event.preventDefault();
        const isFavorite = favorites.some((favoritePost:TPost) => favoritePost.id === post.id);
        if (isFavorite) {
            dispatch(removeFromFavorites(post.id));
        } else {
            dispatch(addToFavorites(post));
        }
    };

    return (
        <div className="grid-container">
            {posts.map((item, index, ) => {
                const isFavorite = favorites.some((favoritePost:TPost) => favoritePost.id === item.id);
                const cardClass = `post-${index+1}`;
                if (index === 0) {
                    return (
                        <Link to={`/${item.id}`} key={item.id} className={`post-big ${cardClass}`}>
                            <PostCardBig
                                id={item.id}
                                image={item.image}
                                date={item.date}
                                title={item.title}
                                description={item.description}
                                onFavoriteToggle = {handleFavorites}
                                isFavorite={isFavorite}
                            />
                        </Link>
                    );
                } else if (index > 0 && index <= 4) {
                    return (
                        <Link to={`/${item.id}`} key={item.id} className={`post-medium ${cardClass}`}>
                            <PostCardMedium
                                id={item.id}
                                image={item.image}
                                date={item.date}
                                title={item.title}
                                onFavoriteToggle = {handleFavorites}
                                isFavorite={isFavorite}
                            />
                        </Link>
                    );
                } else if (index > 4 && index <= 10) {
                    return (
                        <Link to={`/${item.id}`} key={item.id} className={`post-small ${cardClass}`}>
                            <PostCardSmall
                                id={item.id}
                                image={item.image}
                                date={item.date}
                                title={item.title}
                                onFavoriteToggle = {handleFavorites}
                                isFavorite={isFavorite}
                            />
                        </Link>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default PostList;
