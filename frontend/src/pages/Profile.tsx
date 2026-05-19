import Layout from "../components/Layout";

export default function Profile() {
    const user = JSON.parse(
        localStorage.getItem("user") || "{}"
    );

    const posts = JSON.parse(
        localStorage.getItem("posts") || "[]"
    );

    const myPosts = posts.filter(
        (post: any) =>
            post.author === user.name
    );

    return (
        <Layout>
            <div className="profile-card">
                <div className="profile-top">
                    <div className="profile-avatar"></div>

                    <div>
                        <h1>{user.name}</h1>

                        <p>{user.email}</p>
                    </div>
                </div>

                <div className="profile-posts">
                    <h2>Мои посты</h2>

                    {myPosts.map(
                        (post: any) => (
                            <div
                                className="post-card"
                                key={post.id}
                            >
                                {post.content}
                            </div>
                        )
                    )}
                </div>
            </div>
        </Layout>
    );
}