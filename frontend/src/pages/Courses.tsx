import Layout from "../components/Layout";

import { useState } from "react";

export default function Courses() {
    const [courses, setCourses] =
        useState([
            {
                id: 1,
                title: "Frontend React",
                description:
                    "Создание сайтов на React",
                joined: false,
            },

            {
                id: 2,
                title: "Python",
                description:
                    "Основы Python",
                joined: false,
            },

            {
                id: 3,
                title: "UI/UX",
                description:
                    "Дизайн интерфейсов",
                joined: false,
            },
        ]);

    const joinCourse = (
        id: number
    ) => {
        setCourses(
            courses.map((course) =>
                course.id === id
                    ? {
                        ...course,
                        joined: !course.joined,
                    }
                    : course
            )
        );
    };

    return (
        <Layout>
            <h1>Курсы</h1>

            <div className="courses-grid">
                {courses.map((course) => (
                    <div
                        className="course-card"
                        key={course.id}
                    >
                        <h2>{course.title}</h2>

                        <p>
                            {course.description}
                        </p>

                        <button
                            className={
                                course.joined
                                    ? "joined-btn"
                                    : ""
                            }
                            onClick={() =>
                                joinCourse(course.id)
                            }
                        >
                            {course.joined
                                ? "✓ Записан"
                                : "Записаться"}
                        </button>
                    </div>
                ))}
            </div>
        </Layout>
    );
}