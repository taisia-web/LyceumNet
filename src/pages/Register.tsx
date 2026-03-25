import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!name || !email) {
            alert("Заполни все поля");
            return;
        }

        await api.register({ name, email });
        navigate("/");
    };

    return (
        <div className="auth-page">
            <div className="auth-box">
                <h2>Регистрация</h2>

                <input
                    placeholder="Имя"
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button onClick={handleRegister}>
                    Создать аккаунт
                </button>
            </div>
        </div>
    );
}