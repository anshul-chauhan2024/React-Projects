import { useAuthData } from "../../context/AuthProvider"

const AllTask = () => {

    const { employees } = useAuthData()


    return (
        <div className="mt-10 overflow-auto taskList bg-[#1c1c1c] p-5 rounded-md shadow">
            <div className="overflow-x-auto">
                <table className="min-w-225 w-full border-separate border-spacing-y-1">
                    {/* TABLE HEAD */}
                    <thead>
                        <tr className="bg-pink-600">
                            <th className="text-xl font-medium text-left p-2 rounded-l-md">
                                Employee Name
                            </th>
                            <th className="text-xl font-medium text-left p-2">
                                New Task
                            </th>
                            <th className="text-xl font-medium text-left p-2">
                                Active Task
                            </th>
                            <th className="text-xl font-medium text-left p-2">
                                Completed
                            </th>
                            <th className="text-xl font-medium text-left p-2 rounded-r-md">
                                Failed
                            </th>
                        </tr>
                    </thead>

                    {/* TABLE BODY */}
                    <tbody>
                        {employees?.map((emp, idx) => (
                            <tr
                                key={idx}
                                className="border border-white shadow rounded-md"
                            >
                                <td className="p-2 text-lg font-medium text-pink-500 border-b border-l border-white">
                                    {emp.fName}
                                </td>
                                <td className="p-2 text-lg  font-medium text-blue-500 border-b border-white">
                                    {emp.taskCounts.newTasks}
                                </td>
                                <td className="p-2 text-lg font-medium text-yellow-500 border-b border-white">
                                    {emp.taskCounts.acceptedTasks}
                                </td>
                                <td className="p-2 text-lg font-medium text-green-500 border-b border-white">
                                    {emp.taskCounts.completedTasks}
                                </td>
                                <td className="p-2 text-lg font-medium text-red-500  border-b border-r border-white">
                                    {emp.taskCounts.failedTasks}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default AllTask