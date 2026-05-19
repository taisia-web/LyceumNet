import { useState } from "react";
import Layout from "../components/Layout";

const coursesData = [
    {
        id: 1,
        title: "Подготовка к ЕГЭ по математике",
        teacher: "Иванова А.А.",
        members: 32,
    },
    {
        id: 2,
        title: "Python для начинающих",
        teacher: "Смирнов И.И.",
        members: 21,
    },
    {
        id: 3,
        title: "Английский язык B2",
        teacher: "Emily Brown",
        members: 17,
    },
];

export default function Courses() {
    const [joinedCourses, setJoinedCourses] =
        useState<number[]>([]);

    const [search, setSearch] = useState("");

    const filteredCourses =
        coursesData.filter((course) =>
            course.title
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    const joinCourse = (id: number) => {
        if (joinedCourses.includes(id)) {
            return;
        }

        setJoinedCourses([
            ...joinedCourses,
            id,
        ]);
    };

    return (
        <Layout>
            <div className="courses-page">
                <h1>Курсы</h1>

                <input
                    className="course-search"
                    type="text"
                    placeholder="Поиск курсов..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

                <div className="courses-grid">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="course-card"
                        >
                            <h3>{course.title}</h3>

                            <p>
                                Преподаватель:
                                {" "}
                                {course.teacher}
                            </p>

                            <p>
                                Участников:
                                {" "}
                                {course.members}
                            </p>

                            <button
                                className={
                                    joinedCourses.includes(
                                        course.id
                                    )
                                        ? "joined-button"
                                        : ""
                                }
                                onClick={() =>
                                    joinCourse(course.id)
                                }
                            >
                                {joinedCourses.includes(
                                    course.id
                                )
                                    ? "Записан"
                                    : "Записаться"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}