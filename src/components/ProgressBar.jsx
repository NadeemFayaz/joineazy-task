import React from "react";

export default function ProgressBar({ value = 0 }) {
  return (
    <div className="w-full bg-gray-200 rounded h-3 mt-2">
      <div style={{ width: `${value}%` }} className="h-3 rounded bg-blue-500"></div>
    </div>
  );
}
