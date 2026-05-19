import Sidebar from "./Sidebar";

type Props = {
    children: React.ReactNode;
};

export default function Layout({
    children,
}: Props) {
    return (
        <div className="layout">
            <Sidebar />

            <main className="content">
                {children}
            </main>
        </div>
    );
}