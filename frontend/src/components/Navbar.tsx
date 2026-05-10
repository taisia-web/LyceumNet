import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { api } from "../services/api";

<button onClick={() => { api.logout(); location.reload(); }}>
    Выйти
</button>

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">🎓 LyceumNet</div>

            <div className="nav-links">
                <Link to="/">Лента</Link>
                <Link to="/login">Вход</Link>
                <Link to="/register">Регистрация</Link>
            </div>
        </div>
    );
}