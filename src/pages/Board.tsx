import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";

/* ================= TYPES ================= */
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
type StatusFilter = Issue["status"] | "all";

type ViewMode = "board" | "list";
type SortKey = "key" | "priority" | "status";

/* ================= DATA ================= */
const initialIssues: Issue[] = [
  {
    id: "1",
    key: "JIRA-101",
    summary: "Create Header UI",
    description: "Build Jira-like top header",
    type: "task",
    priority: "high",
    status: "todo",
  },
  {
    id: "2",
    key: "JIRA-102",
    summary: "Sidebar navigation",
    description: "Left sidebar",
    type: "story",
    priority: "medium",
    status: "inprogress",
  },
  {
    id: "3",
    key: "JIRA-100",
    summary: "Project setup",
    description: "Vite + routing",
    type: "task",
    priority: "low",
    status: "done",
  },
];

const columns = [
  { id: "todo", name: "To - Do" },
  { id: "inprogress", name: "In Progress" },
  { id: "done", name: "Done" },
] as const;

export default function Board() {
  const [issues, setIssues] = useState<Issue[]>(initialIssues);
  const [viewMode, setViewMode] = useState<ViewMode>("board");

  const [sortKey, setSortKey] = useState<SortKey>("key");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === result.draggableId
          ? {
              ...issue,
              status: result.destination!.droppableId as Issue["status"],
            }
          : issue,
      ),
    );
  };

  const visibleIssues = useMemo(() => {
    let data = [...issues];

    if (statusFilter !== "all") {
      data = data.filter((i) => i.status === statusFilter);
    }

    data.sort((a, b) => String(a[sortKey]).localeCompare(String(b[sortKey])));

    return data;
  }, [issues, sortKey, statusFilter]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <div>
          <button
            onClick={() => setViewMode("board")}
            disabled={viewMode === "board"}
          >
            🧲 Board
          </button>
          <button
            onClick={() => setViewMode("list")}
            disabled={viewMode === "list"}
          >
            📋 List
          </button>
        </div>

        {/* ===== LIST CONTROLS ===== */}
        {viewMode === "list" && (
          <div style={{ display: "flex", gap: 8 }}>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
            >
              <option value="all">All</option>
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>

            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
            >
              <option value="key">Key</option>
              <option value="priority">Priority</option>
              <option value="status">Status</option>
            </select>
          </div>
        )}
      </div>

      {/* ===== BOARD VIEW ===== */}
      {viewMode === "board" ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <div style={{ display: "flex", gap: 16 }}>
            {columns.map((column) => (
              <Droppable droppableId={column.id} key={column.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{ width: 280 }}
                  >
                    <h4>{column.name}</h4>

                    {issues
                      .filter((i) => i.status === column.id)
                      .map((issue, index) => (
                        <Draggable
                          draggableId={issue.id}
                          index={index}
                          key={issue.id}
                        >
                          {(provided) => (
                            <Link
                              to={`/issue/${issue.id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  background: "#fff",
                                  padding: 10,
                                  marginBottom: 8,
                                  borderRadius: 6,
                                  boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
                                  ...provided.draggableProps.style,
                                }}
                              >
                                <small>{issue.key}</small>
                                <div>{issue.summary}</div>
                              </div>
                            </Link>
                          )}
                        </Draggable>
                      ))}

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      ) : (
        /* ===== LIST / TABLE VIEW ===== */
        <table width="100%" cellPadding={10}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid #ddd" }}>
              <th>Key</th>
              <th>Summary</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {visibleIssues.map((issue) => (
              <tr key={issue.id}>
                <td>
                  <Link to={`/issue/${issue.id}`}>{issue.key}</Link>
                </td>
                <td>{issue.summary}</td>
                <td>{issue.status}</td>
                <td>{issue.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
