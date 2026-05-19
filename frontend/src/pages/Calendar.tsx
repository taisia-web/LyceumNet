import Layout from "../components/Layout";

import {
  useEffect,
  useState,
} from "react";

type Plan = {
  text: string;
  important: boolean;
};

export default function Calendar() {
  const days = Array.from(
    { length: 31 },
    (_, i) => i + 1
  );

  const [selectedDay, setSelectedDay] =
    useState<number | null>(null);

  const [task, setTask] =
    useState("");

  const [important, setImportant] =
    useState(false);

  const [plans, setPlans] = useState<{
    [key: number]: Plan;
  }>({});

  useEffect(() => {
    const savedPlans =
      localStorage.getItem(
        "calendarPlans"
      );

    if (savedPlans) {
      setPlans(
        JSON.parse(savedPlans)
      );
    }
  }, []);

  const saveTask = () => {
    if (!selectedDay) return;

    const updatedPlans = {
      ...plans,
      [selectedDay]: {
        text: task,
        important,
      },
    };

    setPlans(updatedPlans);

    localStorage.setItem(
      "calendarPlans",
      JSON.stringify(updatedPlans)
    );
  };

  const selectDay = (day: number) => {
    setSelectedDay(day);

    const existingPlan =
      plans[day];

    if (existingPlan) {
      setTask(existingPlan.text);

      setImportant(
        existingPlan.important
      );
    } else {
      setTask("");

      setImportant(false);
    }
  };

  return (
    <Layout>
      <h1>Календарь</h1>

      <div className="calendar-grid">
        {days.map((day) => (
          <div
            key={day}
            className={`calendar-day ${
              selectedDay === day
                ? "active-day"
                : ""
            }`}
            onClick={() =>
              selectDay(day)
            }
          >
            <div>{day}</div>

            {plans[day] && (
              <div
                className={`plan-dot ${
                  plans[day].important
                    ? "important-dot"
                    : ""
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {selectedDay && (
        <div className="task-panel">
          <h2>
            Планы на {selectedDay} мая
          </h2>

          <textarea
            placeholder="Ваши планы..."
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
          />

          <label className="important-check">
            <input
              type="checkbox"
              checked={important}
              onChange={(e) =>
                setImportant(
                  e.target.checked
                )
              }
            />
            Важное событие
          </label>

          <button onClick={saveTask}>
            Сохранить
          </button>
        </div>
      )}
    </Layout>
  );
}