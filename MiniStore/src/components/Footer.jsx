import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-gray-200 py-10'>
            <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between md:flex-wrap gap-5'>
                {/*  info */}
                <div className='mb-6 md:mb-0 '>
                    <Link to='/'>
                        {/* <img src={Logo} alt="" className='w-32'/> */}
                        <h1 className='text-red-500 text-2xl font-bold'>Mini Store</h1>
                    </Link>
                    <p className='mt-2 text-sm'>Powering Your World with the Best in Electronics.</p>
                    <p className='mt-2 text-sm'>123 Electronics St, Style City, NY 10001</p>
                    <p className='text-sm'>Email: support@ministore.com</p>
                    <p className='text-sm'>Phone: (123) 456-7890</p>
                </div>
                {/* customer service link */}
                <div className='mb-6 md:mb-0 '>
                    <h3 className='text-xl font-semibold'>Customer Service</h3>
                    <ul className='mt-2 text-sm space-y-2'>
                        <li>Contact Us</li>
                        <li>Shipping & Returns</li>
                        <li>FAQs</li>
                        <li>Order Tracking</li>
                        <li>Size Guide</li>
                    </ul>
                </div>
                {/* social media links */}
                <div className='mb-6 md:mb-0 '>
                    <h3 className='text-xl font-semibold'>Follow Us</h3>
                    <div className='flex flex-wrap space-x-4 mt-2'>
                        <FaFacebook
                            className='text-xl hover:text-red-600 hover:scale-110 transition-all duration-300 cursor-pointer' />
                        <FaInstagram
                            className='text-xl hover:text-red-600 hover:scale-105 transition-all duration-300 cursor-pointer' />
                        <FaTwitterSquare className='text-xl hover:text-red-600 hover:scale-110 transition-all duration-300 cursor-pointer' />
                        <FaPinterest
                            className='text-xl hover:text-red-600 hover:scale-110 transition-all duration-300 cursor-pointer' />
                    </div>
                </div>
                {/* newsletter subscription */}
                <div>
                    <h3 className='text-xl font-semibold'>Stay in the Loop</h3>
                    <p className='mt-2 text-sm'>Subscribe to get special offers, free giveaways, and more</p>
                    <form action="" className='mt-4 flex'>
                        <input
                            type="email"
                            placeholder='Your email address'
                            className='w-full p-2 rounded-l-md  text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 border border-white'
                        />
                        <button type='submit' className='bg-red-600 text-white border border-white border-l-0 px-4 rounded-r-md transition-all duration-300 cursor-pointer hover:bg-red-700'>Subscribe</button>
                    </form>
                </div>
            </div>
            {/* bottom section */}
            <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
                <p>&copy; {new Date().getFullYear()} <span className='text-red-500'>Mini Store</span>. All rights reserved by codebyansh</p>
            </div>
        </footer>
    )
}

export default Footer