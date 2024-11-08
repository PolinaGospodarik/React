import React, {useContext, useEffect} from 'react';
import "./SearchPage.css"
import Title from "../../copmonents/Title/Title";
import Footer from "../../copmonents/Footer/Footer";
import {TPost} from "../../types/types";
import {themeContext} from "../../providers/ThemeContext";
import PostSearch from "../../copmonents/PostSearch/PostSearch";
import Spinner from "../../copmonents/Spinner/Spinner";
import {Link} from "react-router-dom";
import {
    addToFavorites,
    decrementOffset,
    fetchPosts,
    incrementOffset,
    removeFromFavorites,
    SearchPost
} from "../../slice/blog";
import {useDispatch, useSelector} from "react-redux";


const SearchPage = () => {

    // const [posts, setPosts] = useState<TPost[]>([]);
    const [color, setColor] = useContext(themeContext);

    const dispatch = useDispatch<any>();
    const data = useSelector((state:any) => state.blog);
    const searchValue = useSelector((state:any) => state.blog.searchValue);
    const favorites = useSelector((state:any) => state.blog.favorites);

    const handleFavorites = (event: React.MouseEvent, post: TPost) => {
        event.preventDefault();
        const isFavorite = favorites.some((favoritePost:TPost) => favoritePost.id === post.id);
        if (isFavorite) {
            dispatch(removeFromFavorites(post.id));
        } else {
            dispatch(addToFavorites(post));
        }
    };

    useEffect(() => {
        dispatch(SearchPost({ search: searchValue, offset: data.offset }));
    }, [data.offset, searchValue, dispatch]);

    return (
        <>
            {data.search.length === "loading" ? <Spinner></Spinner> :
                    <div className={`background-${color}`}>
                        <div className="search-page__container">
                            <div className="search-page__title">
                                <Title>Search results</Title>
                            </div>
                            {data.search.length === 0 ? <div className="no-results">Ничего не найдено</div> :
                                data.search.map((item: any) => {
                                    const isFavorite = favorites.some((favoritePost: TPost) => favoritePost.id === item.id);
                                    return (
                                        <Link to={`/${item.id}`} key={item.id}>
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
                            <div className="search-page__pagination">
                                <div className="search-page__pagination-previous" onClick={() => dispatch(decrementOffset())}> ←
                                    Prev
                                </div>
                                <div className="search-page__pagination-next" onClick={() => dispatch(incrementOffset())}>Next →
                                </div>
                            </div>
                        </div>
                        <Footer></Footer>
                    </div>
            }
        </>
    );
};

export default SearchPage;