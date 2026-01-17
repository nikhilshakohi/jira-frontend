import { useParams } from "react-router-dom";

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

export default function Issue() {
  const { id } = useParams();
  const issue = issues.find((i) => i.id === id);

  if (!issue) return <h3>Issue not found</h3>;

  return (
    <div style={{ padding: 24 }}>
      <h2>{issue.key}</h2>
      <h3>{issue.summary}</h3>
      <p>{issue.description}</p>

      <ul>
        <li><b>Type:</b> {issue.type}</li>
        <li><b>Priority:</b> {issue.priority}</li>
        <li><b>Status:</b> {issue.status}</li>
        {issue.assignee && <li><b>Assignee:</b> {issue.assignee}</li>}
      </ul>
    </div>
  );
}
