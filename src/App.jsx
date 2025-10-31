import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import useLocalStorage from "./hooks/useLocalStorage";
import { sampleAssignments, sampleStudents } from "./data/sampleData";

export default function App() {
  // role: 'student' or 'admin'
  const [role, setRole] = useLocalStorage("joineazy_role", "student");
  // simulated logged-in student id (for student role)
  const [studentId, setStudentId] = useLocalStorage("joineazy_studentId", "s1");
  const [assignments, setAssignments] = useLocalStorage("joineazy_assignments", sampleAssignments);
  const [students, setStudents] = useLocalStorage("joineazy_students", sampleStudents);

  useEffect(()=> {
    // basic migration if sample data is missing submissions for new students
    setAssignments(prev => prev);
  }, []);

  return (
    <div className="min-h-screen flex">
      <Sidebar role={role} setRole={setRole} />
      <div className="flex-1 p-4">
        <Header role={role} setRole={setRole} studentId={studentId} setStudentId={setStudentId} students={students}/>
        <Home
          role={role}
          assignments={assignments}
          setAssignments={setAssignments}
          students={students}
          studentId={studentId}
          setStudents={setStudents}
        />
      </div>
    </div>
  );
}
