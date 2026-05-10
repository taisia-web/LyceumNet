import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { users } from "../data/users";

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
        id: Date.now(),
        name,
        email,
        password: hashedPassword,
    };

    users.push(user);

    res.json(user);
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = users.find((u) => u.email === email);

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    const validPassword = await bcrypt.compare(
        password,
        user.password
    );

    if (!validPassword) {
        return res.status(400).json({
            message: "Wrong password",
        });
    }

    const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET || "secret"
    );

    res.json({
        token,
        user,
    });
};