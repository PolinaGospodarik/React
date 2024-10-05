import React from 'react';
import './FavoritesPost.css';
import {TPost} from '../../types/types';
import {Link} from "react-router-dom";
import PostSearch from "../PostSearch/PostSearch";
import {addToFavorites, removeFromFavorites} from "../../slice/blog";
import {useDispatch, useSelector} from "react-redux";

const FavoritesPost=({posts}: {posts: TPost[]}) => {

    const favorites = useSelector((state:any) => state.blog.favorites);
    const dispatch = useDispatch();

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
        <>
            {posts.map(item => {
                const isFavorite = favorites.some((favoritePost:TPost) => favoritePost.id === item.id);
                    return (
                        <Link to={`/${item.id}`} key={item.id} >
                            <PostSearch
                                id={item.id}
                                image={item.image}
                                date={item.date}
                                title={item.title}
                                onFavoriteToggle={handleFavorites}
                                isFavorite={isFavorite}
                            />
                        </Link>
                    );
            })}
        </>
    );
};

export default FavoritesPost;
