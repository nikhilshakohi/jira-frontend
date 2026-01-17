import { Link } from "react-router-dom";

type Issue = {
  id: string;
  key: string;
  summary: string;
  description: string;
  type: "story" | "bug" | "task";
  priority: "high" | "medium" | "low";
  status: "todo" | "inprogress" | "done";
  assignee?: string;
};

const issues: Issue[] = [
  {
    id: "1",
    key: "JIRA-101",
    summary: "Create Header UI",
    description: "Build Jira-like top header with search & actions",
    type: "task",
    priority: "high",
    status: "todo",
    assignee: "NK",
  },
  {
    id: "2",
    key: "JIRA-102",
    summary: "Sidebar navigation",
    description: "Left sidebar with projects & filters",
    type: "story",
    priority: "medium",
    status: "inprogress",
  },
  {
    id: "3",
    key: "JIRA-100",
    summary: "Project setup",
    description: "Vite + routing + layout",
    type: "task",
    priority: "low",
    status: "done",
  },
];

const columns = [
  { id: "todo", name: "To Do" },
  { id: "inprogress", name: "In Progress" },
  { id: "done", name: "Done" },
] as const;

export default function Board() {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      {columns.map((column) => (
        <div key={column.id} style={{ width: 280 }}>
          <h4>{column.name}</h4>

          {issues
            .filter((issue) => issue.status === column.id)
            .map((issue) => (
              <Link
                key={issue.id}
                to={`/issue/${issue.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 6,
                    padding: 10,
                    marginBottom: 8,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                  }}
                >
                  <small>{issue.key}</small>
                  <div>{issue.summary}</div>
                </div>
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
}
