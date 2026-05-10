import { Request, Response } from "express";
import { posts } from "../data/posts";

export const getPosts = (req: Request, res: Response) => {
    res.json(posts);
};

export const createPost = (
    req: Request,
    res: Response
) => {
    const { author, content } = req.body;

    const post = {
        id: Date.now(),
        author,
        content,
    };

    posts.unshift(post);

    res.json(post);
};

export const deletePost = (
    req: Request,
    res: Response
) => {
    const id = Number(req.params.id);

    const index = posts.findIndex((p) => p.id === id);

    if (index !== -1) {
        posts.splice(index, 1);
    }

    res.json({
        success: true,
    });
};