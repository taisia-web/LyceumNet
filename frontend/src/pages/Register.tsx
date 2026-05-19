import {
    Link,
    useNavigate,
} from "react-router-dom";

import { useState } from "react";

export default function Register() {
    const navigate = useNavigate();

    const [name, setName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const register = () => {
        if (
            !name ||
            !email ||
            !password
        )
            return;

        const users = JSON.parse(
            localStorage.getItem("users") ||
            "[]"
        );

        const existingUser = users.find(
            (user: any) =>
                user.email === email
        );

        if (existingUser) {
            alert(
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
            "user",
            JSON.stringify(newUser)
        );

        navigate("/feed");

        window.location.reload();
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>Регистрация</h1>

                <input
                    placeholder="Имя"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />

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

                <button onClick={register}>
                    Зарегистрироваться
                </button>

                <Link to="/">
                    Уже есть аккаунт?
                </Link>
            </div>
        </div>
    );
}