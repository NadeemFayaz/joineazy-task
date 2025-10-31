import React, { useState } from "react";
import AssignmentCard from "./AssignmentCard";
import AssignmentForm from "./AssignmentForm";

export default function AdminDashboard({ assignments, setAssignments, students }) {
  const [showForm, setShowForm] = useState(false);

  const createAssignment = (payload) => {
    setAssignments(prev => [
      ...prev,
      {
        id: `a${Date.now()}`,
        submissions: students.reduce((acc, s) => ({ ...acc, [s.id]: { status: "not_submitted", confirmed: false } }), {}),
        ...payload,
      }
    ]);
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Assignments</h2>
        <button onClick={()=> setShowForm(true)} className="px-3 py-1 bg-blue-600 text-white rounded">Create Assignment</button>
      </div>

      {showForm && <AssignmentForm onSubmit={createAssignment} onCancel={()=>setShowForm(false)} />}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {assignments.map(a => (<AssignmentCard key={a.id} assignment={a} role="admin" />))}
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Detailed Submissions</h3>
        <div className="overflow-auto bg-white p-4 rounded shadow">
          <table className="min-w-full text-sm">
            <thead className="text-left text-xs text-gray-500">
              <tr>
                <th>Assignment</th>
                {students.map(s=> <th key={s.id}>{s.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {assignments.map(a => (
                <tr key={a.id} className="border-t">
                  <td className="p-2">{a.title}</td>
                  {students.map(s => (
                    <td key={s.id} className="p-2">{a.submissions[s.id].status}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
