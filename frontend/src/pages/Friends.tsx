import Layout from "../components/Layout";

import {
    useEffect,
    useState,
} from "react";

export default function Friends() {
    const [friends, setFriends] =
        useState<string[]>([]);

    const [search, setSearch] =
        useState("");

    useEffect(() => {
        const savedFriends =
            localStorage.getItem(
                "friends"
            );

        if (savedFriends) {
            setFriends(
                JSON.parse(savedFriends)
            );
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "friends",
            JSON.stringify(friends)
        );
    }, [friends]);

    const addFriend = () => {
        if (!search.trim()) return;

        setFriends([
            ...friends,
            search,
        ]);

        setSearch("");
    };

    return (
        <Layout>
            <h1>Друзья</h1>

            <div className="create-post">
                <input
                    className="friend-input"
                    placeholder="Добавить друга..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

                <button onClick={addFriend}>
                    Добавить
                </button>
            </div>

            <div className="friends-grid">
                {friends.map(
                    (friend, index) => (
                        <div
                            className="friend-card"
                            key={index}
                        >
                            <div className="avatar"></div>

                            <h3>{friend}</h3>

                            <p>Ученик лицея</p>
                        </div>
                    )
                )}
            </div>
        </Layout>
    );
}