const USER_KEY = "user";
const POSTS_KEY = "posts";

export const api = {
    login: async (email: string) => {
        const user = {
            id: 1,
            name: email.split("@")[0],
            email,
        };

        localStorage.setItem(USER_KEY, JSON.stringify(user));
        return user;
    },

    register: async (data: any) => {
        const user = {
            id: Date.now(),
            name: data.name,
            email: data.email || "user@mail.com",
        };

        localStorage.setItem(USER_KEY, JSON.stringify(user));
        return user;
    },

    getCurrentUser: () => {
        const user = localStorage.getItem(USER_KEY);
        return user ? JSON.parse(user) : null;
    },

    logout: () => {
        localStorage.removeItem(USER_KEY);
    },

    getPosts: () => {
        const posts = localStorage.getItem(POSTS_KEY);
        return posts ? JSON.parse(posts) : [];
    },

    savePosts: (posts: any[]) => {
        localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
    },
};