import {
    Link,
    useNavigate,
} from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("user");

        navigate("/");

        window.location.reload();
    };

    return (
        <aside className="sidebar">
            <div>
                <h1 className="logo">
                    LyceumNet
                </h1>

                <nav className="nav">
                    <Link to="/feed">
                        📰 Лента
                    </Link>

                    <Link to="/friends">
                        👥 Друзья
                    </Link>

                    <Link to="/calendar">
                        📅 Календарь
                    </Link>

                    <Link to="/profile">
                        👤 Профиль
                    </Link>

                    <Link to="/courses">
                        📚 Курсы
                    </Link>

                    <Link to="/groups">
                        👨‍💻 Группы
                    </Link>
                </nav>
            </div>

            <button
                className="logout-btn"
                onClick={logout}
            >
                Выйти
            </button>
        </aside>
    );
}