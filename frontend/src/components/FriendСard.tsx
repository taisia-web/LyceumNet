type Props = {
    name: string;
};

export default function FriendCard({
    name,
}: Props) {
    return (
        <div className="friend-card">
            <div className="avatar"></div>

            <h3>{name}</h3>

            <button>
                Добавить
            </button>
        </div>
    );
}