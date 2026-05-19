import {
    Link,
    useNavigate,
} from "react-router-dom";

import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [error, setError] =
        useState("");

    const login = () => {
        const users = JSON.parse(
            localStorage.getItem("users") ||
            "[]"
        );

        const foundUser = users.find(
            (user: any) =>
                user.email === email &&
                user.password === password
        );

        if (!foundUser) {
            setError(
                "Пароль или почта введены неправильно."
            );
            return;
        }

        localStorage.setItem(
            "user",
            JSON.stringify(foundUser)
        );

        navigate("/feed");

        window.location.reload();
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>Вход</h1>

                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                {error && (
                    <p className="auth-error">
                        {error}
                    </p>
                )}

                <button onClick={login}>
                    Войти
                </button>

                <Link to="/register">
                    Создать аккаунт
                </Link>
            </div>
        </div>
    );
}