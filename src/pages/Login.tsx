import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Заполни все поля");
            return;
        }

        await api.login(email);
        navigate("/");
    };

    return (
        <div className="auth-page">
            <div className="auth-box">
                <h2>Вход</h2>

                <input
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Пароль"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleLogin}>Войти</button>
            </div>
        </div>
    );
}