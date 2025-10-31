import React, { useState } from "react";
import AssignmentCard from "./AssignmentCard";
import ConfirmModal from "./ConfirmModal";

export default function StudentDashboard({ assignments, setAssignments, studentId }) {
  // modal state
  const [confirming, setConfirming] = useState(null); // {assignmentId, step:1|2}

  const openConfirm = (assignmentId) => setConfirming({ assignmentId, step: 1 });

  const doConfirm = (assignmentId) => {
    // set step 2 (final)
    setConfirming({ assignmentId, step: 2 });
  };

  const finalize = (assignmentId) => {
    setAssignments(prev => prev.map(a => {
      if (a.id !== assignmentId) return a;
      return {
        ...a,
        submissions: {
          ...a.submissions,
          [studentId]: { status: "submitted", confirmed: true }
        }
      };
    }));
    setConfirming(null);
  };

  const cancel = () => setConfirming(null);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {assignments.map(a => (
          <AssignmentCard
            key={a.id}
            assignment={a}
            role="student"
            studentId={studentId}
            onSubmitClick={() => openConfirm(a.id)}
          />
        ))}
      </div>

      {confirming && (
        <ConfirmModal
          step={confirming.step}
          onClose={cancel}
          onProceed={() => confirming.step === 1 ? doConfirm(confirming.assignmentId) : finalize(confirming.assignmentId)}
          title="Confirm Submission"
          message={confirming.step === 1 ? "Are you sure you have submitted on Drive? (Step 1)" : "Final confirmation: this will mark your assignment as submitted."}
        />
      )}
    </div>
  );
}
