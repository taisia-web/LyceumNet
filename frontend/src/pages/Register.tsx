import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [error, setError] =
        useState("");

    const register = () => {
        if (!name || !email || !password) {
            setError("Заполните все поля");
            return;
        }

        const users = JSON.parse(
            localStorage.getItem("users") || "[]"
        );

        const existingUser = users.find(
            (user: any) => user.email === email
        );

        if (existingUser) {
            setError(
                "Пользователь уже существует"
            );
            return;
        }

        const newUser = {
            name,
            email,
            password,
        };

        users.push(newUser);

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        localStorage.setItem(
            "currentUser",
            JSON.stringify(newUser)
        );

        navigate("/feed");
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>Регистрация</h1>

                <input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />

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

                <button onClick={register}>
                    Зарегистрироваться
                </button>

                {error && (
                    <p className="auth-error">
                        {error}
                    </p>
                )}

                <p>
                    Уже есть аккаунт?
                    {" "}
                    <Link to="/login">
                        Войти
                    </Link>
                </p>
            </div>
        </div>
    );
}