import React, { useState } from "react";

export default function AssignmentForm({ onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [driveLink, setDriveLink] = useState("");
  const [dueDate, setDueDate] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title) return alert("Title required");
    onSubmit({ title, desc, driveLink, dueDate });
  };

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded shadow mb-4">
      <div className="grid gap-2 md:grid-cols-2">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="border p-2 rounded" />
        <input value={dueDate} onChange={e=>setDueDate(e.target.value)} placeholder="Due Date" type="date" className="border p-2 rounded" />
        <input value={driveLink} onChange={e=>setDriveLink(e.target.value)} placeholder="Drive Link" className="border p-2 rounded col-span-2" />
        <textarea value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Description" className="border p-2 rounded col-span-2" />
      </div>
      <div className="mt-3 flex gap-2 justify-end">
        <button type="button" onClick={onCancel} className="px-3 py-1 border rounded">Cancel</button>
        <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">Create</button>
      </div>
    </form>
  );
}
