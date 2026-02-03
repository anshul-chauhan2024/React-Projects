import DashboardHeader from "../Others/DashboardHeader"
import TaskNumber from "../Others/TaskNumber"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = ({ userData,setUser }) => {
console.log(userData.taskCounts);

    return (
        <section>
            <div className="max-w-7xl mx-auto py-15 px-5">
                {/* Header */}
                <DashboardHeader userData={userData} setUser={setUser} />

                {/* Task Types */}
                <TaskNumber userData={userData} />

                {/* Task List */}
                <TaskList userData={userData} />

            </div>
        </section>
    )
}

export default EmployeeDashboard