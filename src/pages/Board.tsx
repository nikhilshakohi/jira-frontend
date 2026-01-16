export type Issue = {
  id: string;
  key: string;
  summary: string;
  type: "story" | "bug" | "task";
  priority: "high" | "medium" | "low";
  assignee?: string;
};

export type Column = {
  id: string;
  name: string;
  issues: Issue[];
};

const boardData: Column[] = [
  {
    id: "todo",
    name: "To Do",
    issues: [
      {
        id: "1",
        key: "JIRA-101",
        summary: "Create Header UI",
        type: "task",
        priority: "high",
        assignee: "NK",
      },
    ],
  },
  {
    id: "inprogress",
    name: "In Progress",
    issues: [
      {
        id: "2",
        key: "JIRA-102",
        summary: "Sidebar navigation",
        type: "story",
        priority: "medium",
      },
    ],
  },
  {
    id: "done",
    name: "Done",
    issues: [
      {
        id: "3",
        key: "JIRA-100",
        summary: "Project setup",
        type: "task",
        priority: "low",
      },
    ],
  },
];

export default function Board() {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      {boardData.map((column) => (
        <div key={column.id} style={{ width: 280 }}>
          <h4>{column.name}</h4>

          {column.issues.map((issue) => (
            <div
              key={issue.id}
              style={{
                background: "#fff",
                borderRadius: 6,
                padding: 10,
                marginBottom: 8,
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <small>{issue.key}</small>
              <div>{issue.summary}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
