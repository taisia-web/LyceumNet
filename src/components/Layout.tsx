import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import "../styles/layout.css";

export default function Layout({ children }: any) {
    const navigate = useNavigate();
    const user = api.getCurrentUser();

    return (
        <div className="page">
            {/* 🔝 Верхняя панель */}
            <div className="top">
                <div className="user-info">
                    <div className="avatar">👤</div>
                    <div className="name">
                        {user ? user.name : "Гость"}
                    </div>
                </div>

                <div>
                    {!user && (
                        <>
                            <button onClick={() => navigate("/login")}>
                                Вход
                            </button>
                            <button onClick={() => navigate("/register")}>
                                Регистрация
                            </button>
                        </>
                    )}

                    {user && (
                        <>
                            <button onClick={() => navigate("/profile")}>
                                Профиль
                            </button>

                            <button
                                onClick={() => {
                                    api.logout();
                                    navigate("/login");
                                }}
                            >
                                Выйти
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* 🔘 Навигация */}
            <div className="tabs">
                <Link to="/">Посты</Link>
                <Link to="/friends">Друзья</Link>
                <Link to="/calendar">Календарь</Link>
            </div>

            {/* 📄 Контент */}
            <div className="content">
                <div className="main">{children}</div>

                <div className="sidebar">
                    <div className="card">
                        <button>Курсы</button>
                        <button>Группы</button>
                        <button>Чаты</button>
                    </div>

                    <div className="card">Список друзей</div>
                </div>
            </div>
        </div>
    );
}