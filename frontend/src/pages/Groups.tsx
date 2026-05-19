import Layout from "../components/Layout";

import { useState } from "react";

export default function Groups() {
    const [groups, setGroups] =
        useState([
            {
                id: 1,
                name: "Frontend Team",
                joined: false,
            },

            {
                id: 2,
                name: "Math Club",
                joined: false,
            },

            {
                id: 3,
                name: "Physics",
                joined: false,
            },
        ]);

    const joinGroup = (
        id: number
    ) => {
        setGroups(
            groups.map((group) =>
                group.id === id
                    ? {
                        ...group,
                        joined: !group.joined,
                    }
                    : group
            )
        );
    };

    return (
        <Layout>
            <h1>Группы</h1>

            <div className="courses-grid">
                {groups.map((group) => (
                    <div
                        className="course-card"
                        key={group.id}
                    >
                        <h2>{group.name}</h2>

                        <p>
                            Совместные проекты
                        </p>

                        <button
                            className={
                                group.joined
                                    ? "joined-btn"
                                    : ""
                            }
                            onClick={() =>
                                joinGroup(group.id)
                            }
                        >
                            {group.joined
                                ? "✓ Участник"
                                : "Вступить"}
                        </button>
                    </div>
                ))}
            </div>
        </Layout>
    );
}