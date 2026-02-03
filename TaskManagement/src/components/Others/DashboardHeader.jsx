const DashboardHeader = ({ userData,setUser }) => { 

    const logoutUser = () => {
       localStorage.removeItem("loggedInUser");
        setUser(null)
    }
    return (
        <section>
            <div className="w-full flex justify-between items-end">
                <h2 className="text-2xl font-semibold">
                    Hello
                    <br />
                    <span className="text-3xl text-pink-600">{userData.fName}👋</span>
                </h2>

                <button
                    onClick={logoutUser}
                    className="bg-pink-600 text-white px-4 py-2 transition-all active:scale-95 hover:bg-pink-700 rounded-md cursor-pointer">Logout</button>
            </div>
        </section>
    )
}

export default DashboardHeader