import DashboardHeader from '../Others/DashboardHeader'
import AllEmployees from '../Others/AllEmployees'
import CreateTask from '../Others/CreateTask'

const AdminDashboard = ({userData,setUser}) => {


  return (
    <section>
      <div className="max-w-7xl mx-auto py-15 px-5">
        <DashboardHeader userData={userData} setUser={setUser} />
        <CreateTask />
        <AllEmployees/>
      </div>
    </section>
  )
}

export default AdminDashboard