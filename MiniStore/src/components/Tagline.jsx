import { Link } from 'react-router-dom'
import taglineImg from '../assets/tagline.jpg'

const Tagline = () => {
    return (
        <section className="max-w-7xl mx-auto my-15 ">
              <div className='relative max-w-7xl mx-auto md:rounded-2xl bg-cover bg-center h-90 py-10 md:py-0 md:h-120  ' style={{backgroundImage: `url(${taglineImg})`, backgroundPosition:'center', backgroundAttachment: 'fixed'}}>
        <div className='absolute inset-0 bg-black/60 xl:rounded-2xl bg-opacity-50 flex items-center justify-center'>
            <div className='text-center text-white px-4'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Next-Gen Electronics at Your Fingertips</h1>
                <p className='text-lg md:text-xl mb-6'>Discover the latest tech innovations with unbeatable prices and free shipping on all orders.</p>
                <Link to={'/products'}><button className='bg-linear-to-r from-red-600 to-red-800 border-2 border-white text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 cursor-pointer hover:scale-105 active:scale-95'>Shop Now</button></Link>
            </div>
        </div>
      </div>
        </section>
    )
}

export default Tagline
