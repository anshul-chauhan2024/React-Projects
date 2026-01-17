import { Link, NavLink } from "react-router";
import { MapPinned, ChevronDown, ShoppingCart, X } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useCartData } from "../context/CartContext";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";



const Navbar = ({ location, getLocation, openDropdown, setOpenDropdown }) => {

    const { cartItems } = useCartData();

    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown)
    }

    const [openMenu, setOpenMenu] = useState(false);




    return (
        <header className="py-4 shadow-lg px-5">
            <div className="max-w-7xl mx-auto lg:flex items-center justify-between">

                {/* LOGO */}
                <div className="logo flex justify-between lg:justify-start gap-7 mb-5 lg:mb-0">
                    <Link to={'/'}>
                        <h1 className="font-semibold text-3xl">
                            <span className="font-serif text-red-600">M</span>ini
                            <span className="font-serif text-red-600">S</span>tore
                        </h1>
                    </Link>

                    <div className="flex gap-2 items-center relative">
                        <MapPinned className="text-red-600 font-semibold" />
                        {location ? <div className='-space-y-2'>
                            <p>{location.city}</p>
                            <p>{location.state}</p>
                        </div> : 'Add Address'}
                        <ChevronDown onClick={toggleDropdown} className="cursor-pointer" />


                    </div>

                    {/* Location Dropdown */}
                    {
                        openDropdown ? <div className='w-62.5 h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md'>
                            <h1
                                className='font-semibold mb-4 text-xl flex justify-between'>
                                Change Location
                                <span onClick={toggleDropdown}
                                    className="cursor-pointer">
                                    <X />
                                </span>
                            </h1>

                            <button onClick={getLocation}
                                className='bg-red-600 transition-all duration-300 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-700' >
                                Detect my location
                            </button>
                        </div> : null
                    }
                </div>

                {/* Desktop Menu*/}
                <nav className=" hidden lg:flex items-center gap-12">
                    <ul className="flex gap-7 items-center  text-lg">
                        <li>
                            <NavLink to={'/'}
                                className={({ isActive }) => (isActive ? 'border-b-3 border-red-600 text-red-600 transition-all duration-300 ' : 'transition-all duration-300 border-b-3 border-transparent hover:border-red-600 hover:text-red-600')}>
                                Home
                            </NavLink>
                        </li>


                        <li>
                            <NavLink to={'/products'}
                                className={({ isActive }) => (isActive ? 'border-b-3 border-red-600 text-red-600 transition-all duration-300 ' : 'transition-all duration-300 border-b-3 border-transparent hover:border-red-600 hover:text-red-600')}>
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'}
                                className={({ isActive }) => (isActive ? 'border-b-3 border-red-600 text-red-600 transition-all duration-300 ' : 'transition-all duration-300 border-b-3 border-transparent hover:border-red-600 hover:text-red-600')}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'}
                                className={({ isActive }) => (isActive ? 'border-b-3 border-red-600 text-red-600 transition-all duration-300 ' : 'transition-all duration-300 border-b-3 border-transparent hover:border-red-600 hover:text-red-600')}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>


                    {/* Cart & Login */}
                    <div className="flex gap-8 items-center ">
                        <div className="relative ">
                            <Link to={'/cart'}>
                                <ShoppingCart className="text-2xl" />
                            </Link>
                            <span className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full p-2 h-6 w-6 flex justift-center items-center">{cartItems.length}</span>
                        </div>

                        <div>
                            <SignedOut>
                                <SignInButton
                                    className='bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-red-800' />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </div>
                </nav>



                {/* Mobile Menu */}
                <nav className="lg:hidden flex items-end justify-between gap-12 relative">
                    <div onClick={() => setOpenMenu(!openMenu)}>
                        <HiOutlineBars3CenterLeft className=" text-2xl cursor-pointer" />
                    </div>

                    <div
                        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${openMenu ? "h-max opacity-100 mt-4" : "max-h-0 opacity-0"}`} >

                        <ul className="flex flex-col gap-3 items-start   text-lg absolute top-12 -left-2 z-9 bg-white p-5 border-2 border-gray-100 rounded-md shadow-lg w-50">

                            <li>
                                <NavLink to={'/'}
                                    className={({ isActive }) => (isActive ? 'border-b-3 border-red-600 text-red-600 transition-all duration-300 ' : 'transition-all duration-300 border-b-3 border-transparent hover:border-red-600 hover:text-red-600')}
                                    onClick={() => setOpenMenu(false)}>
                                    Home
                                </NavLink>
                            </li>


                            <li>
                                <NavLink to={'/products'}
                                    className={({ isActive }) => (isActive ? 'border-b-3 border-red-600 text-red-600 transition-all duration-300 ' : 'transition-all duration-300 border-b-3 border-transparent hover:border-red-600 hover:text-red-600')}
                                    onClick={() => setOpenMenu(false)}>
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'}
                                    className={({ isActive }) => (isActive ? 'border-b-3 border-red-600 text-red-600 transition-all duration-300 ' : 'transition-all duration-300 border-b-3 border-transparent hover:border-red-600 hover:text-red-600')}
                                    onClick={() => setOpenMenu(false)}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'}
                                    className={({ isActive }) => (isActive ? 'border-b-3 border-red-600 text-red-600 transition-all duration-300 ' : 'transition-all duration-300 border-b-3 border-transparent hover:border-red-600 hover:text-red-600')}
                                    onClick={() => setOpenMenu(false)}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>


                        {/* CART & LOGIN */}

                    </div>

                    <div className="flex gap-8 items-center ">
                        <div className="relative ">
                            <Link to={'/cart'}>
                                <ShoppingCart className="text-2xl" />
                            </Link>
                            <span className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full p-2 h-6 w-6 flex justift-center items-center">{cartItems.length}</span>
                        </div>

                        <div>
                            <SignedOut>
                                <SignInButton
                                    className='bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-red-800' />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>

                    </div>

                </nav>

                {/* <nav></nav> */}
            </div>
        </header>
    )
}

export default Navbar