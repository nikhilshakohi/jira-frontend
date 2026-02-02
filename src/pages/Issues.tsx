export default function Issues() {
  const issues = [
    {
      key: "JIRA-101",
      summary: "Create Header UI",
      type: "Story",
      priority: "High",
      status: "In Progress",
      assignee: "NK",
    },
    {
      key: "JIRA-102",
      summary: "Fix login bug",
      type: "Bug",
      priority: "Medium",
      status: "To Do",
      assignee: "--",
    },
  ];

  return (
    <div className="px-6 py-4 bg-slate-100 min-h-screen">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-semibold text-slate-800">Issues</h1>

        <input
          placeholder="Search issues"
          className="h-8 px-3 text-sm border rounded-md bg-white w-64"
        />
      </div>

      <div className="bg-white border rounded-md">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b">
            <tr className="text-slate-500">
              <th className="px-3 py-2 text-left font-medium">Key</th>
              <th className="px-3 py-2 text-left font-medium">Summary</th>
              <th className="px-3 py-2 text-left font-medium">Pri</th>
              <th className="px-3 py-2 text-left font-medium">Status</th>
              <th className="px-3 py-2 text-left font-medium">Asg</th>
            </tr>
          </thead>

          <tbody>
            {issues.map((i) => (
              <tr
                key={i.key}
                className="border-b last:border-none hover:bg-slate-50 cursor-pointer"
              >
                <td className="px-3 py-2 text-blue-600 font-medium">{i.key}</td>

                <td className="px-3 py-2 text-slate-800">{i.summary}</td>

                <td className="px-3 py-2">
                  <span
                    className={`text-xs font-medium ${
                      i.priority === "High" ? "text-red-600" : "text-yellow-600"
                    }`}
                  >
                    {i.priority}
                  </span>
                </td>

                <td className="px-3 py-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                    {i.status}
                  </span>
                </td>

                <td className="px-3 py-2 text-slate-500">{i.assignee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
