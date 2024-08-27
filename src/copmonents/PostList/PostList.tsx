import './PostList.css';
import PostCardBig from '../PostCardBig/PostCardBig';
import PostCardMedium from '../PostCardMedium/PostCardMedium';
import PostCardSmall from '../PostCardSmall/PostCardSmall';
import {TPost} from "../../types/types";

const PostList = ({posts}: {posts: TPost[]}) => {
    return (
        <div className="grid-container">
            {posts.map((item, index) => {
                const cardClass = `post-${item.id}`;
                if (index === 0) {
                    return (
                        <div key={item.id} className={`post-big ${cardClass}`}>
                            <PostCardBig
                                id={item.id}
                                image={item.image}
                                date={item.date}
                                title={item.title}
                                description={item.description}
                            />
                        </div>
                    );
                } else if (index > 0 && index <= 4) {
                    return (
                        <div key={item.id} className={`post-medium ${cardClass}`}>
                            <PostCardMedium
                                id={item.id}
                                image={item.image}
                                date={item.date}
                                title={item.title}
                            />
                        </div>
                    );
                } else if (index > 4 && index <= 10) {
                    return (
                        <div key={item.id} className={`post-small ${cardClass}`}>
                            <PostCardSmall
                                id={item.id}
                                image={item.image}
                                date={item.date}
                                title={item.title}
                            />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default PostList;
