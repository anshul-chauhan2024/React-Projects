# 📊 Task Management Dashboard (Role-Based)

**Project Type:** Productivity & Workflow Management System  
**Live Demo:** https://task-management-codebyansh.netlify.app
**Tech Stack:** React JS, Tailwind CSS, LocalStorage/REST API, HTML5, CSS3

---

## 📖 Project Overview

This is a comprehensive productivity web application designed to streamline team workflows through a **Dual-Interface System**. The application implements **Role-Based Access Control (RBAC)**, allowing Administrators to manage team tasks while providing Employees with a personalized interface to track their individual progress.

---

## 🛠️ Technical Features & Implementation

### 🔐 Secure Authentication & RBAC
- **Role-Based Access:** Implemented a secure login system that redirects users to either the **Admin** or **Employee** dashboard based on their credentials.
- **Protected Views:** Ensured that sensitive administrative actions are only accessible to authorized users.

### 👑 Admin Capabilities (Control Center)
- **Task Creation & Assignment:** Built a dynamic form for Administrators to create tasks and assign them to specific team members.
- **Global Overview:** Developed a statistical overview to track the total number of New, Active, Completed, and Failed tasks across the entire team.

### 👤 Employee Capabilities (Personal Workspace)
- **Personalized Task List:** Each employee sees only their assigned work, categorized by status.
- **Status Management:** Integrated functionality for employees to update task status in real-time (Active, Completed, Failed).

### 📱 Responsive UI/UX
- **Tailwind CSS Grid/Flex:** Created a complex dashboard layout that is fully responsive across mobile, tablet, and desktop.
- **Interactive Feedback:** Used status-based color coding (e.g., Green for Completed, Red for Failed) for quick visual data interpretation.

---

## 🔐 Demo Login Credentials

You can use the following credentials to test the application:

### 1. Admin Access
- **Email:** `codebyansh@gmail.com`
- **Password:** `123`

### 2. Employee Access (Test Accounts)
- **Password:** `123` (Same for all)
- **Emails:** `atul@gmail.com`, `aman@gmail.com`, `anshul@gmail.com`, `pramod@gmail.com`, `happy@gmail.com`

---

## 🚀 Key Achievements

- **State Persistence:** Successfully managed data flow between Admin actions and Employee views using centralized state logic.
- **Complex UI Logic:** Handled multiple data states (New, Active, Completed, Failed) within a single unified dashboard.
- **Security Logic:** Developed a logic-driven login flow to simulate a real-world enterprise environment.

---

## 📂 Project Structure

```text
src/
├── components/      # TaskCards, StatsCards, Login, CreateTask
├── context/         # AuthContext and TaskData Management
├── pages/           # AdminDashboard, EmployeeDashboard, LoginPage
├── assets/          # Professional Icons and UI assets
└── App.js           # Role-based Routing Logic
