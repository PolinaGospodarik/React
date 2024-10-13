import React, {useContext, useEffect} from 'react';
import SelectedPost from "../../copmonents/SelectedPost/SeletedPost";
import Spinner from "../../copmonents/Spinner/Spinner";
import Footer from "../../copmonents/Footer/Footer";
import {themeContext} from "../../providers/ThemeContext";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostById} from "../../slice/blog";


const SelectedPage = () => {

    const [color, setColor] = useContext(themeContext);
    const {id} = useParams();

    const dispatch = useDispatch()<any>;
    const {selectedPost, status, error } = useSelector((state: any) => state.blog)


    useEffect(() => {
        if(id){
            dispatch(fetchPostById(id));
        }
    }, [dispatch, id]);


    return (
        <>
            <div className={`background-${color}`}>
                {status === 'loading' && <Spinner />}
                {status === 'resolved' && selectedPost && <SelectedPost post={selectedPost} />}
                {status === 'rejected' && <div>{error}</div>}
                <Footer></Footer>
            </div>
        </>
    );
};

export default SelectedPage;