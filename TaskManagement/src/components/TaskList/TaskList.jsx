import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({ userData }) => {

    return (
        <div className="mt-10">
            {/* <h2 className="text-3xl font-semibold">All Tasks</h2> */}
            <div className="mt-4 flex gap-4 overflow-x-auto taskList" >

                {userData?.tasks.map((data, idx) => {
                    if (data.newTask) {
                        return <NewTask key={idx} data={data} />
                    }
                    if (data.active) {
                        return <AcceptTask key={idx} data={data} />
                    }

                    if (data.completed) {
                        return <CompleteTask key={idx} data={data} />
                    }

                    if (data.failed) {
                        return <FailedTask key={idx} data={data} />
                    }
                })}








            </div>

        </div>
    )
}

export default TaskList