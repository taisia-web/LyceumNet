import { Request, Response } from "express";
import { posts } from "../data/posts";

export const getPosts = (req: Request, res: Response) => {
    res.json(posts);
};

export const createPost = (req: Request, res: Response) => {
    const { author, content } = req.body;

    const newPost = {
        id: Date.now(),
        author,
        content,
        likes: 0,
        comments: []
    };

    posts.unshift(newPost);
    res.json(newPost);
};

export const likePost = (req: Request, res: Response) => {
    const postId = Number(req.params.id);

    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return res.status(404).json({
            message: "Пост не найден"
        });
    }

    post.likes += 1;

    res.json(post);
};


export const addComment = (req: Request, res: Response) => {
    const postId = Number(req.params.id);

    const { comment } = req.body;

    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return res.status(404).json({
            message: "Пост не найден"
        });
    }

    post.comments.push(comment);

    res.json(post);
};

export const deletePost = (req: Request, res: Response) => {
    const postId = Number(req.params.id);

    const index = posts.findIndex((p) => p.id === postId);

    if (index === -1) {
        return res.status(404).json({
            message: "Пост не найден"
        });
    }

    posts.splice(index, 1);

    res.json({
        message: "Пост удален"
    });
};