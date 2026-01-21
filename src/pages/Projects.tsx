type ProjectStatus = "active" | "onhold" | "completed";

interface Project {
  id: string;
  name: string;
  key: string;
  description: string;
  status: ProjectStatus;
  owner: string;
  createdAt: string;
}

/* ================= MOCK DATA ================= */
const projects: Project[] = [
  {
    id: "1",
    name: "Jira Clone",
    key: "JIRA",
    description: "Internal issue tracking system",
    status: "active",
    owner: "Nikhil",
    createdAt: "2026-01-10",
  },
  {
    id: "2",
    name: "Clinic Management",
    key: "CLINIC",
    description: "End-to-end clinic workflow app",
    status: "onhold",
    owner: "Team Alpha",
    createdAt: "2025-12-18",
  },
  {
    id: "3",
    name: "Portfolio v2",
    key: "PORT",
    description: "Personal portfolio revamp",
    status: "completed",
    owner: "Nikhil",
    createdAt: "2025-11-01",
  },
];

/* ================= HELPERS ================= */
const statusStyles: Record<ProjectStatus, string> = {
  active: "bg-green-100 text-green-700",
  onhold: "bg-yellow-100 text-yellow-700",
  completed: "bg-gray-200 text-gray-700",
};

export default function Projects() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        📁 Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-4 bg-white hover:shadow-sm transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{project.name}</h3>
              <span
                className={`text-xs px-2 py-0.5 rounded ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-3">
              {project.description}
            </p>

            <div className="text-xs text-gray-500 space-y-1">
              <div>Key: {project.key}</div>
              <div>Owner: {project.owner}</div>
              <div>Created: {project.createdAt}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
