import Layout from "../components/Layout";
import "../styles/calendar.css";

export default function Calendar() {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <Layout>
            <div className="calendar">
                <h3>Март 2026</h3>

                <div className="grid">
                    {days.map((day) => (
                        <div key={day} className="day">
                            {day}
                        </div>
                    ))}
                </div>
            </div>

            <div className="card">События на выбранную дату</div>
        </Layout>
    );
}