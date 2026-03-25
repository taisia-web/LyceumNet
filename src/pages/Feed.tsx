import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { api } from "../services/api";

export default function Feed() {
    const [posts, setPosts] = useState<any[]>([]);
    const [text, setText] = useState("");
    const user = api.getCurrentUser();

    useEffect(() => {
        setPosts(api.getPosts());
    }, []);

    const createPost = () => {
        if (!text) {
            alert("Введите текст");
            return;
        }

        if (!user) {
            alert("Сначала войдите!");
            return;
        }

        const newPost = {
            id: Date.now(),
            author: user.name,
            content: text,
        };

        const updated = [newPost, ...posts];

        setPosts(updated);
        api.savePosts(updated);
        setText("");
    };

    const deletePost = (id: number) => {
        const updated = posts.filter((p) => p.id !== id);
        setPosts(updated);
        api.savePosts(updated);
    };

    const deleteAll = () => {
        localStorage.removeItem("posts");
        setPosts([]);
    };

    return (
        <Layout>
            <div className="card">
                <textarea
                    placeholder="Напиши пост..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <button onClick={createPost}>Опубликовать</button>
                <button onClick={deleteAll}>Удалить все</button>
            </div>

            {posts.length === 0 && <p>Постов пока нет</p>}

            {posts.map((p) => (
                <div key={p.id} className="card">
                    <h3>{p.author}</h3>
                    <p>{p.content}</p>

                    <button onClick={() => deletePost(p.id)}>
                        Удалить
                    </button>
                </div>
            ))}
        </Layout>
    );
}