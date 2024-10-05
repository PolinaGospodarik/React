import React, {useContext, useEffect, useState} from 'react';
import "./SearchPage.css"
import Title from "../../copmonents/Title/Title";
import Footer from "../../copmonents/Footer/Footer";
import {TPost} from "../../types/types";
import {themeContext} from "../../providers/ThemeContext";
import PostSearch from "../../copmonents/PostSearch/PostSearch";
import Spinner from "../../copmonents/Spinner/Spinner";
import {Link, useNavigate} from "react-router-dom";
import {addToFavorites, removeFromFavorites} from "../../slice/blog";
import {useDispatch, useSelector} from "react-redux";


const SearchPage = () => {

    const [posts, setPosts] = useState<TPost[]>([]);
    const [color, setColor] = useContext(themeContext);

    const favorites = useSelector((state:any) => state.blog.favorites);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?limit=11')
            .then(response => response.json())
            .then(json => setPosts(json.results))
    }, [])


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
            {posts.length === 0 ? <Spinner></Spinner> :
            <div className={`background-${color}`}>
                <div className="search-page__container">
                    <div className="search-page__title">
                        <Title>Search results</Title>
                    </div>
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
                </div>
                <Footer></Footer>
            </div>
            }
        </>
    );
};

export default SearchPage;