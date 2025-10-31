export const sampleStudents = [
  { id: "s1", name: "Ali Khan", email: "ali@example.com" },
  { id: "s2", name: "Sara Ahmed", email: "sara@example.com" },
  { id: "s3", name: "Faizan Aijaz", email: "faizan@example.com" },
];

export const sampleAssignments = [
  {
    id: "a1",
    title: "DBMS Assignment 1",
    desc: "ER diagram + SQL queries",
    driveLink: "https://drive.google.com/example1",
    dueDate: "2025-11-05",
    createdBy: "prof1",
    submissions: {
      // studentId -> {status: 'submitted'|'not_submitted', confirmed:false|true}
      s1: { status: "not_submitted", confirmed: false },
      s2: { status: "submitted", confirmed: true },
      s3: { status: "not_submitted", confirmed: false },
    },
  },
  {
    id: "a2",
    title: "React Mini Project",
    desc: "Build a TODO app",
    driveLink: "https://drive.google.com/example2",
    dueDate: "2025-11-15",
    createdBy: "prof1",
    submissions: {
      s1: { status: "not_submitted", confirmed: false },
      s2: { status: "not_submitted", confirmed: false },
      s3: { status: "not_submitted", confirmed: false },
    },
  },
];
