import { deadlines } from "../data";

export default function Deadlines() {
  return (
    <section id="deadlines">
      <h2 className="heading-2 text-primary mb-10">Deadline Submissions</h2>

      <div className="relative border-l-2 border-secondary pl-10 space-y-10">
        {deadlines.map((item, index) => (
          <div key={index} className="relative">
            <span className="absolute -left-4 top-1 h-6 w-6 rounded-full bg-primary" />
            <h3 className="heading-4">{item.title}</h3>
            <p className="text-text-muted text-small mt-1">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
