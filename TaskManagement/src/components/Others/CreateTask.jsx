import { useState } from "react";
import { useAuthData } from "../../context/AuthProvider";

const CreateTask = () => {
    const { employees, setEmployees } = useAuthData();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const createTaskHandler = (e) => {
        e.preventDefault();

        const task = {
            title,
            date,
            category,
            description,
            newTask: true,
            active: false,
            completed: false,
            failed: false,
        };

        const updatedEmployees = employees.map(emp => {
            if (emp.fName === assignTo) {
                return {
                    ...emp,
                    tasks: [...emp.tasks, task],
                    taskCounts: {
                        ...emp.taskCounts,
                        newTasks: emp.taskCounts.newTasks + 1,
                    },
                };
            }
            return emp;
        });

        setEmployees(updatedEmployees);
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));

        // reset form
        setTitle("");
        setDate("");
        setAssignTo("");
        setCategory("");
        setDescription("");
    };

    return (
        <div className='bg-[#1c1c1c] p-5 mt-10 rounded-md shadow admin_dashboard_form'>
            <form onSubmit={createTaskHandler} className='grid md:grid-cols-2 gap-5'>
                <div>
                    <label>Task Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} required />

                    <label className="mt-4 block">Date</label>
                    <input type="date" value={date} onChange={e => setDate(e.target.value)} required />

                    <label className="mt-4 block">Assign To</label>
                    <input
                        value={assignTo}
                        onChange={e => setAssignTo(e.target.value)}
                        list="employee-list"
                        required
                    />

                    <datalist id="employee-list">
                        {employees?.map((emp, idx) => (
                            <option key={idx} value={emp.fName} />
                        ))}
                    </datalist>

                    <label className="mt-4 block">Category</label>
                    <input value={category} onChange={e => setCategory(e.target.value)} required />
                </div>

                <div>
                    <label>Description</label>
                    <textarea
                        rows="10"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />

                    <button className="bg-pink-600 cursor-pointer w-full mt-3 py-2 rounded-md transition-all hover:bg-pink-700 active:scale-95 ">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
