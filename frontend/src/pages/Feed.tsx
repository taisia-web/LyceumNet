import {
    useEffect,
    useState,
} from "react";

import Layout from "../components/Layout";

type Post = {
    id: number;
    author: string;
    content: string;
    likes: number;
    liked: boolean;
    comments: string[];
};

export default function Feed() {
    const [posts, setPosts] = useState<
        Post[]
    >([]);

    const [text, setText] =
        useState("");

    const [comment, setComment] =
        useState("");

    useEffect(() => {
        const savedPosts =
            localStorage.getItem("posts");

        if (savedPosts) {
            setPosts(JSON.parse(savedPosts));
        } else {
            const defaultPosts = [
                {
                    id: 1,
                    author: "Анна",
                    content:
                        "Готовлюсь к олимпиаде 🚀",
                    likes: 4,
                    liked: false,
                    comments: ["🔥"],
                },

                {
                    id: 2,
                    author: "Иван",
                    content:
                        "Кто идет на React курс?",
                    likes: 7,
                    liked: false,
                    comments: ["👍"],
                },
            ];

            setPosts(defaultPosts);

            localStorage.setItem(
                "posts",
                JSON.stringify(defaultPosts)
            );
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

        const user = JSON.parse(
            localStorage.getItem("user") ||
            "{}"
        );

        const newPost = {
            id: Date.now(),
            author: user.name,
            content: text,
            likes: 0,
            liked: false,
            comments: [],
        };

        setPosts([newPost, ...posts]);

        setText("");
    };

    const likePost = (id: number) => {
        setPosts(
            posts.map((post) =>
                post.id === id
                    ? {
                        ...post,
                        likes: post.liked
                            ? post.likes - 1
                            : post.likes + 1,
                        liked: !post.liked,
                    }
                    : post
            )
        );
    };

    const addComment = (id: number) => {
        if (!comment.trim()) return;

        setPosts(
            posts.map((post) =>
                post.id === id
                    ? {
                        ...post,
                        comments: [
                            ...post.comments,
                            comment,
                        ],
                    }
                    : post
            )
        );

        setComment("");
    };

    return (
        <Layout>
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

            {posts.map((post) => (
                <div
                    className="post-card"
                    key={post.id}
                >
                    <div className="post-header">
                        <div className="post-avatar"></div>

                        <h3>{post.author}</h3>
                    </div>

                    <p className="post-content">
                        {post.content}
                    </p>

                    <div className="post-actions">
                        <button
                            className={
                                post.liked ? "liked" : ""
                            }
                            onClick={() =>
                                likePost(post.id)
                            }
                        >
                            ❤️ {post.likes}
                        </button>

                        <span>
                            💬 {post.comments.length}
                        </span>
                    </div>

                    <div className="comments">
                        {post.comments.map(
                            (comment, index) => (
                                <div
                                    key={index}
                                    className="comment"
                                >
                                    😊 {comment}
                                </div>
                            )
                        )}
                    </div>

                    <div className="comment-input">
                        <input
                            placeholder="Комментарий..."
                            value={comment}
                            onChange={(e) =>
                                setComment(e.target.value)
                            }
                        />

                        <button
                            onClick={() =>
                                addComment(post.id)
                            }
                        >
                            ➤
                        </button>
                    </div>
                </div>
            ))}
        </Layout>
    );
}