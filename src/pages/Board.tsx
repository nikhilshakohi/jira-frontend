import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";

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

const initialIssues: Issue[] = [
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
  const [issues, setIssues] = useState(initialIssues);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
  
    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === result.draggableId
          ? { ...issue, status: result.destination!.droppableId as Issue["status"] }
          : issue
      )
    );
  };  

  return (
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
                  .filter((issue) => issue.status === column.id)
                  .map((issue, index) => (
                    <Draggable
                      draggableId={issue.id}
                      index={index}
                      key={issue.id}
                    >
                      {(provided) => (
                        <Link
                          to={`/issue/${issue.id}`}
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              background: "#fff",
                              borderRadius: 6,
                              padding: 10,
                              marginBottom: 8,
                              boxShadow:
                                "0 1px 3px rgba(0,0,0,0.12)",
                              cursor: "grab",
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
  );
}
