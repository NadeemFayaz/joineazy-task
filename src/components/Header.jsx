import React from "react";

export default function Header({ role, studentId, setStudentId, students = [] }) {
  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold">{role === "admin" ? "Admin Dashboard" : "Student Dashboard"}</h1>
      {role === "student" && (
        <div className="flex items-center gap-2">
          <label className="text-sm">Logged as:</label>
          <select value={studentId} onChange={e=> setStudentId(e.target.value)} className="border rounded p-1">
            {students.map(s=> <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </div>
      )}
    </header>
  );
}
