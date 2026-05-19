import type { ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";

type Props = {
    children: ReactNode;
};

export default function Layout({
    children,
}: Props) {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("currentUser");

        navigate("/login");
    };

    return (
        <div className="layout">
            <aside className="sidebar">
                <h2>LyceumNet</h2>

                <nav>
                    <NavLink to="/feed">
                        Лента
                    </NavLink>

                    <NavLink to="/profile">
                        Профиль
                    </NavLink>

                    <NavLink to="/friends">
                        Друзья
                    </NavLink>

                    <NavLink to="/calendar">
                        Календарь
                    </NavLink>

                    <NavLink to="/courses">
                        Курсы
                    </NavLink>

                    <NavLink to="/groups">
                        Группы
                    </NavLink>
                </nav>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    Выйти
                </button>
            </aside>

            <main className="content">
                {children}
            </main>
        </div>
    );
}