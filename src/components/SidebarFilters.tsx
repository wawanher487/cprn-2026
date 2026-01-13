const filters = [
  { label: "Deadline Submissions", target: "deadlines" },
  { label: "Summit Fee", target: "summit-fee" },
  { label: "Accommodation", target: "accommodation" },
  { label: "Summit Venue", target: "summit-venue" },
];

export function SidebarFilters() {
  return (
    <aside className="hidden xl:block bg-surface p-6 rounded-2xl shadow-lg w-72 sticky top-20 h-fit">
      <p className="text-small mb-4 text-text-muted">Filter by topic</p>
      <ul className="space-y-3">
        {filters.map((item, i) => (
          <li key={i}>
            <a
              href={`#${item.target}`}
              className="cursor-pointer text-text-primary hover:text-primary transition font-medium"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
