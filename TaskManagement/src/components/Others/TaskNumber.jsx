
const TaskNumber = ({userData}) => {
    return (
        <div className="mt-10">
            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">

                <div className="bg-blue-400 p-5 rounded-md shadow ">
                    <p className="text-4xl font-semibold">{userData.taskCounts.newTasks}</p>
                    <h4 className="text-lg font-medium">New Tasks</h4>
                </div>

                <div className="bg-yellow-400 p-5 rounded-md shadow ">
                    <p className="text-4xl font-semibold">{userData.taskCounts.acceptedTasks}</p>
                    <h4 className="text-lg font-medium">Accepted</h4>
                </div>
                <div className="bg-green-400 p-5 rounded-md shadow ">
                    <p className="text-4xl font-semibold">{userData.taskCounts.completedTasks}</p>
                    <h4 className="text-lg font-medium">Completed</h4>
                </div>
                <div className="bg-red-400 p-5 rounded-md shadow ">
                    <p className="text-4xl font-semibold">{userData.taskCounts.failedTasks}</p>
                    <h4 className="text-lg font-medium">Failed</h4>
                </div>


            </div>
        </div>
    )
}

export default TaskNumber