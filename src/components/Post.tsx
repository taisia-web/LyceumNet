import { api } from "../services/api";
import { useState } from "react";

export default function Post({ post, allPosts, setPosts }: any) {
    const [text, setText] = useState("");

    const updatePosts = (updatedPost: any) => {
        const updated = allPosts.map((p: any) =>
            p.id === post.id ? updatedPost : p
        );

        setPosts(updated);
        api.savePosts(updated);
    };

    const like = () => {
        const updated = { ...post, likes: post.likes + 1 };
        updatePosts(updated);
    };

    const addComment = () => {
        if (!text) return;

        const updated = {
            ...post,
            comments: [...post.comments, text],
        };

        updatePosts(updated);
        setText("");
    };

    return (
        <div className="post">
            <h3>{post.author}</h3>
            <p>{post.content}</p>

            <div className="actions">
                <button onClick={like}>👍 {post.likes}</button>
            </div>

            <div className="comments">
                {post.comments.map((c: string, i: number) => (
                    <div key={i} className="comment">
                        {c}
                    </div>
                ))}
            </div>

            <div className="add-comment">
                <input
                    placeholder="Комментарий..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={addComment}>➤</button>
            </div>
        </div>
    );
}