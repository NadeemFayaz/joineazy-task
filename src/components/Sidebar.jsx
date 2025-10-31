import React from "react";

function IconStudent({ className, size = 20 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ display: 'block' }}
      overflow="visible"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20v-1a4 4 0 014-4h8a4 4 0 014 4v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconAdmin({ className, size = 20 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ display: 'block' }}
      overflow="visible"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91l-5-3.64 5.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export default function Sidebar({ role, setRole }) {
  // Inline fallbacks ensure reasonable layout when Tailwind is not yet applied.
  // Slightly increased left padding and overflow-visible help prevent icons
  // being clipped on very small viewports before Tailwind loads.
  const asideFallback = { width: 64, background: '#fff', borderRight: '1px solid #e5e7eb', padding: 12, paddingLeft: 12, overflow: 'visible' };
  const btnFallback = { display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 48, height: 48, padding: '0.25rem', borderRadius: 6, cursor: 'pointer', boxSizing: 'border-box' };

return (
  <aside
    className="w-16 md:w-60 bg-white border-r p-3 flex flex-col items-center md:items-start overflow-hidden md:overflow-visible"
    aria-label="Sidebar"
  >
    {/* Logo */}
    <div className="hidden md:flex items-center font-bold text-lg mb-6 px-2">
      Joineazy
    </div>

    {/* Navigation */}
    <nav
      className="space-y-3 flex-1 flex flex-col justify-center items-center md:items-start w-full"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Student View Button */}
      <button
        onClick={() => setRole("student")}
        aria-pressed={role === "student"}
        className={`flex items-center justify-center md:justify-start gap-3 w-12 md:w-full h-12 px-2 md:px-4 rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
          role === "student"
            ? "bg-blue-50 text-blue-700"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <IconStudent className="w-6 h-6 text-gray-500" size={22} />
        <span className="hidden md:inline">Student View</span>
      </button>

      {/* Admin View Button */}
      <button
        onClick={() => setRole("admin")}
        aria-pressed={role === "admin"}
        className={`flex items-center justify-center md:justify-start gap-3 w-12 md:w-full h-12 px-2 md:px-4 rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
          role === "admin"
            ? "bg-blue-50 text-blue-700"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <IconAdmin className="w-6 h-6 text-gray-500" size={22} />
        <span className="hidden md:inline">Admin View</span>
      </button>
    </nav>

    {/* Footer */}
    <div className="mt-auto text-xs text-gray-400 px-2 hidden md:block">
      v0.1
    </div>
  </aside>
);
}