import React from "react";
import StudentDashboard from "../components/StudentDashboard";
import AdminDashboard from "../components/AdminDashboard";

export default function Home(props) {
  const { role } = props;
  return role === "admin" ? <AdminDashboard {...props}/> : <StudentDashboard {...props} />;
}
