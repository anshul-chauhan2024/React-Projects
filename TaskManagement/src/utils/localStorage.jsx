const employees = [
  {
    id: 1,
    fName: "Atul",
    email: "atul@gmail.com",
    password: "123",
    taskCounts: { newTasks: 1, acceptedTasks: 0, completedTasks: 1, failedTasks: 1 },
    tasks: [
      {
        id: 1,
        title: "Design Landing Page UI",
        description: "Create a modern, responsive landing page layout.",
        category: "Design",
        date: "2026-01-05",
        newTask: true,
        active: true,
        completed: false,
        failed: false,
      },
      {
        id: 2,
        title: "Fix Mobile Navbar",
        description: "Resolve dropdown malfunction on touch devices.",
        category: "Bug Fix",
        date: "2026-01-03",
        newTask: false,
        active: false,
        completed: true,
        failed: false,
      },
      {
        id: 3,
        title: "Update Footer Links",
        description: "Add social media icons and update copyright info.",
        category: "UI Update",
        date: "2026-01-02",
        newTask: false,
        active: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    fName: "Anshul",
    email: "anshul@gmail.com",
    password: "123",
    taskCounts: { newTasks: 1, acceptedTasks: 0, completedTasks: 2, failedTasks: 1 },
    tasks: [
      {
        id: 1,
        title: "Integrate Product API",
        description: "Connect frontend to backend for dynamic product data.",
        category: "Development",
        date: "2026-01-07",
        newTask: true,
        active: true,
        completed: false,
        failed: false,
      },
      {
        id: 2,
        title: "Database Backup Setup",
        description: "Schedule automated backups for data security.",
        category: "Database",
        date: "2026-01-01",
        newTask: false,
        active: false,
        completed: true,
        failed: false,
      },
      {
        id: 3,
        title: "Global Error Handling",
        description: "Implement robust catch mechanisms for API failures.",
        category: "Backend",
        date: "2026-01-04",
        newTask: false,
        active: false,
        completed: true,
        failed: false,
      },
      {
        id: 4,
        title: "Optimize DB Queries",
        description: "Refactor slow queries to improve performance.",
        category: "Performance",
        date: "2026-01-06",
        newTask: false,
        active: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    fName: "Pramod",
    email: "pramod@gmail.com",
    password: "123",
    taskCounts: { newTasks: 1, acceptedTasks: 1, completedTasks: 2, failedTasks: 1 },
    tasks: [
      {
        id: 1,
        title: "Responsive Listing Page",
        description: "Build a product list that works on all screen sizes.",
        category: "Frontend",
        date: "2026-01-08",
        newTask: true,
        active: true,
        completed: false,
        failed: false,
      },
      {
        id: 2,
        title: "Add SEO Meta Tags",
        description: "Optimize titles and descriptions for search engines.",
        category: "SEO",
        date: "2026-01-03",
        newTask: false,
        active: false,
        completed: true,
        failed: false,
      },
      {
        id: 3,
        title: "Compress Site Images",
        description: "Reduce file sizes while maintaining visual quality.",
        category: "Optimization",
        date: "2026-01-04",
        newTask: false,
        active: false,
        completed: true,
        failed: false,
      },
      {
        id: 4,
        title: "Cross-Device Testing",
        description: "Verify UI consistency across various mobile devices.",
        category: "Testing",
        date: "2026-01-06",
        newTask: false,
        active: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    fName: "Aman",
    email: "aman@gmail.com",
    password: "123",
    taskCounts: { newTasks: 1, acceptedTasks: 0, completedTasks: 1, failedTasks: 0 },
    tasks: [
      {
        id: 1,
        title: "UI Component Review",
        description: "Evaluate current components for design improvements.",
        category: "Review",
        date: "2026-01-06",
        newTask: true,
        active: true,
        completed: false,
        failed: false,
      },
      {
        id: 2,
        title: "Design Style Guide",
        description: "Create standards for typography, colors, and spacing.",
        category: "Design",
        date: "2026-01-04",
        newTask: false,
        active: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    fName: "Happy",
    email: "happy@gmail.com",
    password: "123",
    taskCounts: { newTasks: 1, acceptedTasks: 0, completedTasks: 1, failedTasks: 0 },
    tasks: [
      {
        id: 1,
        title: "Write Homepage Content",
        description: "Develop engaging and SEO-friendly web copy.",
        category: "Content",
        date: "2026-01-07",
        newTask: true,
        active: true,
        completed: false,
        failed: false,
      },
      {
        id: 2,
        title: "Proofread Website",
        description: "Fix grammar and improve overall readability.",
        category: "Content",
        date: "2026-01-05",
        newTask: false,
        active: false,
        completed: true,
        failed: false,
      },
    ],
  },
];


const admin = {
  id: 1,
  fName: "Code By Ansh",
  email: "codebyansh@gmail.com",
  password: "123",
};

export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
