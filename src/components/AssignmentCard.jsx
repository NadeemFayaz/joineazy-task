import React from "react";
import ProgressBar from "./ProgressBar";

export default function AssignmentCard({ assignment, role, studentId, onSubmitClick }) {
  const submissions = assignment.submissions || {};
  // compute progress: fraction of students submitted
  const studentIds = Object.keys(submissions);
  const submittedCount = studentIds.filter(id => submissions[id].status === "submitted").length;
  const progress = Math.round((submittedCount / Math.max(1, studentIds.length)) * 100);

  // student status
  const myStatus = studentId ? submissions[studentId] : undefined;

  return (
    <div className="bg-white shadow p-4 rounded">
      <h3 className="font-semibold">{assignment.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{assignment.desc}</p>
      <a className="text-xs text-blue-600 break-all" href={assignment.driveLink} target="_blank" rel="noreferrer">Drive Link</a>
      <div className="mt-3">
        <div className="text-xs text-gray-500">Due: {assignment.dueDate}</div>
        <ProgressBar value={progress} />
        <div className="mt-2 flex items-center justify-between">
          {role === "student" ? (
            <>
              <div className="text-sm">{myStatus?.status === "submitted" ? "Submitted" : "Not submitted"}</div>
              {myStatus?.status !== "submitted" && <button onClick={onSubmitClick} className="px-3 py-1 rounded bg-green-500 text-white text-sm">Mark Submitted</button>}
            </>
          ) : (
            <div className="text-sm">Submitted: {submittedCount}/{studentIds.length}</div>
          )}
        </div>
      </div>
    </div>
  );
}
