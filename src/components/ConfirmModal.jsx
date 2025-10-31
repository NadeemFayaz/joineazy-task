import React from "react";

export default function ConfirmModal({ step=1, onClose, onProceed, title, message }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-40" onClick={onClose}></div>
      <div className="bg-white rounded p-6 z-10 w-11/12 md:w-1/3">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 border rounded">Cancel</button>
          <button onClick={onProceed} className="px-3 py-1 rounded bg-blue-600 text-white">{step===1 ? "Yes, continue" : "Confirm & submit"}</button>
        </div>
      </div>
    </div>
  );
}
