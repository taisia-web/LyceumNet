const API_URL = "http://localhost:5000/api";

export const api = {
    async getPosts() {
        const response = await fetch(`${API_URL}/posts`);
        return response.json();
    },

    async createPost(post: any) {
        const response = await fetch(`${API_URL}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });

        return response.json();
    },

    async login(data: any) {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return response.json();
    },

    async register(data: any) {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return response.json();
    },
};