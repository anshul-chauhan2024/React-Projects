import { useState } from "react";
import { FaUser } from "react-icons/fa";

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formSubmitted = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    }

    return (
        <section>
            <div className="max-w-7xl mx-auto h-screen flex flex-col justify-center items-center px-5">
                <div className="sm:w-100 w-full  bg-white border-3 outline-3 outline-white border-pink-600 px-5 py-10 flex flex-col gap-6 rounded-lg shadow-lg items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-pink-600 text-white  flex justify-center items-center text-4xl">
                        <FaUser />
                    </div>

                    <form
                        className=" flex flex-col gap-4 w-full"
                        onSubmit={(e) => formSubmitted(e)}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="  w-full p-3  placeholder:text-gray-500 border-2 border-pink-600 rounded-lg text-black"
                            autoComplete="false"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="  w-full p-3  placeholder:text-gray-500  border-2 border-pink-600 rounded-lg text-black"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />




                        <button
                            type="submit"
                            className="bg-pink-600 transition-all duration-300 hover:bg-pink-700  text-white px-2 py-3 rounded-full w-full cursor-pointer active:scale-95"
                        >
                            Login
                        </button>


                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login