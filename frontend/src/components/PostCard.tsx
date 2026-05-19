type Props = {
    author: string;
    content: string;
    likes: number;
    comments: string[];
};

export default function PostCard({
    author,
    content,
    likes,
    comments,
}: Props) {
    return (
        <div className="post-card">
            <div className="post-header">
                <div className="post-avatar"></div>

                <div>
                    <h3>{author}</h3>
                </div>
            </div>

            <p className="post-content">
                {content}
            </p>

            <div className="post-actions">
                <button>
                    ❤️ {likes}
                </button>

                <button>
                    💬 {comments.length}
                </button>
            </div>
        </div>
    );
}