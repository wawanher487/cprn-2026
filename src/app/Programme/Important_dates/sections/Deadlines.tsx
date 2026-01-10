import { deadlines } from "./deadlines";

export default function Deadlines() {
  return (
    <section id="deadlines" className="scroll-mt-8">
      <h2 className="heading-2 text-secondary mb-8">Deadline Submissions</h2>

      <div className="relative border-l-2 border-secondary pl-10 space-y-10 mx-10">
        {deadlines.map((item, index) => (
          <div key={index} className="relative">
            <span className="absolute -left-15 top-1 h-10 w-10 rounded-full bg-accent-hover" />
            <h3 className="heading-4">{item.title}</h3>
            <p className="text-text-muted text-small mt-1">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
