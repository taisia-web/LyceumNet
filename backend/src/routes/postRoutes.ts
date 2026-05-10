import express from "express";

import {
    getPosts,
    createPost,
    likePost,
    addComment,
    deletePost
} from "../controllers/postController";

const router = express.Router();

router.get("/", getPosts);

router.post("/", createPost);

router.post("/:id/like", likePost);

router.post("/:id/comment", addComment);

router.delete("/:id", deletePost);

export default router;