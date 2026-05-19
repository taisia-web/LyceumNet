import { useEffect, useState } from "react";
import Layout from "../components/Layout";

type PostType = {
    author: string;
    content: string;
    likes: number;
    comments: string[];
};

export default function Feed() {
    const currentUser = JSON.parse(
        localStorage.getItem("currentUser") || "{}"
    );

    const [posts, setPosts] = useState<PostType[]>([]);

    const [text, setText] = useState("");

    const [commentInputs, setCommentInputs] =
        useState<{ [key: number]: string }>({});

    useEffect(() => {
        const savedPosts = JSON.parse(
            localStorage.getItem("posts") || "[]"
        );

        if (savedPosts.length > 0) {
            setPosts(savedPosts);
        }
        
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "posts",
            JSON.stringify(posts)
        );
    }, [posts]);

    const addPost = () => {
        if (!text.trim()) return;

        const newPost = {
            author: currentUser.name,
            content: text,
            likes: 0,
            comments: [],
        };

        setPosts([newPost, ...posts]);

        setText("");
    };

    const likePost = (index: number) => {
        const updatedPosts = [...posts];

        updatedPosts[index].likes += 1;

        setPosts(updatedPosts);
    };

    const addComment = (index: number) => {
        const commentText =
            commentInputs[index];

        if (!commentText?.trim()) return;

        const updatedPosts = [...posts];

        updatedPosts[index].comments.push(
            commentText
        );

        setPosts(updatedPosts);

        setCommentInputs({
            ...commentInputs,
            [index]: "",
        });
    };

    return (
        <Layout>
            <div className="feed-page">
                <h1>Лента</h1>

                <div className="create-post">
                    <textarea
                        placeholder="Что нового?"
                        value={text}
                        onChange={(e) =>
                            setText(e.target.value)
                        }
                    />

                    <button onClick={addPost}>
                        Опубликовать
                    </button>
                </div>

                <div className="posts">
                    {posts.map((post, index) => (
                        <div
                            className="post-card"
                            key={index}
                        >
                            <h3>{post.author}</h3>

                            <p>{post.content}</p>

                            <div className="post-actions">
                                <button
                                    onClick={() =>
                                        likePost(index)
                                    }
                                >
                                    ❤️ {post.likes}
                                </button>
                            </div>

                            <div className="comments">
                                {post.comments.map(
                                    (comment, i) => (
                                        <div
                                            className="comment"
                                            key={i}
                                        >
                                            💬 {comment}
                                        </div>
                                    )
                                )}

                                <div className="add-comment">
                                    <input
                                        type="text"
                                        placeholder="Комментарий..."
                                        value={
                                            commentInputs[index] || ""
                                        }
                                        onChange={(e) =>
                                            setCommentInputs({
                                                ...commentInputs,
                                                [index]:
                                                    e.target.value,
                                            })
                                        }
                                    />

                                    <button
                                        onClick={() =>
                                            addComment(index)
                                        }
                                    >
                                        ➤
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}