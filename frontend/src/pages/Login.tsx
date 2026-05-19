import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] =
        useState("");

    const [error, setError] =
        useState("");

    const login = () => {
        const users = JSON.parse(
            localStorage.getItem("users") || "[]"
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
            "currentUser",
            JSON.stringify(foundUser)
        );

        navigate("/feed");
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>Вход</h1>

                <input
                    type="email"
                    placeholder="Почта"
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

                <button onClick={login}>
                    Войти
                </button>

                {error && (
                    <p className="auth-error">
                        {error}
                    </p>
                )}

                <p>
                    Нет аккаунта?
                    {" "}
                    <Link to="/register">
                        Зарегистрироваться
                    </Link>
                </p>
            </div>
        </div>
    );
}