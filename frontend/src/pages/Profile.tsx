import Layout from "../components/Layout";

export default function Profile() {
    const currentUser = JSON.parse(
        localStorage.getItem("currentUser") ||
        "{}"
    );

    const posts = JSON.parse(
        localStorage.getItem("posts") || "[]"
    );

    const myPosts = posts.filter(
        (post: any) =>
            post.author === currentUser.name
    );

    return (
        <Layout>
            <div className="profile-page">
                <div className="profile-card">
                    <div className="profile-avatar"></div>

                    <h1>
                        {currentUser.name}
                    </h1>

                    <p>{currentUser.email}</p>
                </div>

                <div className="profile-posts">
                    <h2>Мои посты</h2>

                    {myPosts.length === 0 ? (
                        <p>
                            У вас пока нет постов
                        </p>
                    ) : (
                        myPosts.map(
                            (
                                post: any,
                                index: number
                            ) => (
                                <div
                                    className="post-card"
                                    key={index}
                                >
                                    <h3>{post.author}</h3>

                                    <p>{post.content}</p>

                                    <div className="post-actions">
                                        ❤️ {post.likes}
                                    </div>
                                </div>
                            )
                        )
                    )}
                </div>
            </div>
        </Layout>
    );
}