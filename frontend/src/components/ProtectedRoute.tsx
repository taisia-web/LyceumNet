import { Navigate } from "react-router-dom";

type Props = {
    children: React.ReactNode;
};

export default function ProtectedRoute({
    children,
}: Props) {
    const currentUser =
        localStorage.getItem("currentUser");

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return children;
}