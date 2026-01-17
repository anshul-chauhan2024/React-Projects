import { useCartData } from "../context/CartContext";
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuNotebookText } from 'react-icons/lu';
import { MdDeliveryDining } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { useUser } from "@clerk/clerk-react";
import emptyCart from "../assets/empty-cart.png"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Cart = ({ location, getLocation }) => {
  const { user } = useUser()
  const { cartItems, updateQuantity, deleteFromCart } = useCartData();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-15 px-5">
        {cartItems.length > 0 ? (
          <div>
            <h1 className="text-3xl font-semibold mb-7">Your Cart ({cartItems.length})</h1>

            <div>
              <div className='mt-10'>
                {cartItems.map((item, index) => {
                  return <div key={index} className='bg-white pr-10 shadow-lg rounded-md md:flex gap-2 items-center justify-between mt-3 w-full'>

                    {/* Product Image and Details */}
                    <div className='flex items-center gap-4'>
                      <img src={item.images} alt={item.title} className='w-40 h-40 rounded-md' />
                      <div>
                        <h1 className='md:w-100 line-clamp-2 font-semibold  text-lg sm:text-2xl'>{item.title}</h1>
                        <p className="line-clamp-2 md:w-100">{item.description}</p>
                        <p className='text-red-600 font-semibold text-xl'>${item.price}</p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className='bg-red-600 text-white flex gap-4 py-2  px-4 rounded-md font-bold text-xl w-max'>
                      <button
                        onClick={() => updateQuantity(cartItems, item.id, 'decrement')}
                        className='cursor-pointer'>
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => updateQuantity(cartItems, item.id, 'increment')}
                        className='cursor-pointer'>
                        +
                      </button>
                    </div>

                    {/* Delete Button */}
                    <span onClick={() => deleteFromCart(item.id)} className='hover:bg-white/60 transition-all rounded-full  hover:shadow-2xl'>
                      <FaRegTrashAlt className='text-red-600 text-2xl cursor-pointer' />
                    </span>
                  </div>
                })}
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-20 mt-7'>
              <div className='bg-white shadow-md rounded-md p-7  space-y-2'>
                {/* Delivery Info */}
                <h1 className='text-gray-800 font-bold text-xl'>Delivery Info</h1>
                <div className='flex flex-col space-y-1'>
                  <input type="text"
                    placeholder='Enter your name'
                    className='p-2 rounded-md border border-gray-300'
                    value={user?.fullName}
                  />
                </div>

                <div className='flex flex-col space-y-1'>
                  <input name="" type="text"
                    placeholder='Enter your address'
                    className='p-2 rounded-md w-full border border-gray-300'
                    value={location?.city}
                  />
                </div>
                <div className='flex w-full gap-5'>
                  <div className='flex flex-col space-y-1 w-full'>
                    <input type="text"
                      placeholder='Enter your state'
                      className='p-2 rounded-md w-full border border-gray-300'
                      value={location?.state}
                    />
                  </div>
                  <div className='flex flex-col space-y-1 w-full'>
                    <input type="text"
                      placeholder='Enter your postcode'
                      className='p-2 rounded-md w-full border border-gray-300'
                      value={location?.postcode}
                    />
                  </div>
                </div>
                <div className='flex w-full gap-5'>
                  <div className='flex flex-col space-y-1 w-full'>
                    <input type="text"
                      placeholder='Enter your country'
                      className='p-2 rounded-md w-full border border-gray-300'
                      value={location?.country}
                    />
                  </div>
                  <div className='flex flex-col space-y-1 w-full'>
                    <input type="text"
                      placeholder='Enter your Number'
                      className='p-2 rounded-md w-full border border-gray-300' />
                  </div>
                </div>


                <button className='bg-red-600 text-white px-3 py-1 rounded-md mt-3 cursor-pointer'>Submit</button>
                <div className='flex items-center justify-center w-full text-gray-700'>
                  ---------OR-----------
                </div>

                {/* Location Detection Button */}
                <div className='flex justify-center'>
                  <button className='bg-red-600 text-white px-3 py-2 rounded-md cursor-pointer' onClick={getLocation}>Detect Location</button>
                </div>
              </div>

              {/* Bill Details Section */}
              <div className='bg-white border border-gray-100 shadow-xl rounded-md p-7  space-y-2 h-max mt-10 md:mt-0'>
                <h1 className='text-gray-800 font-bold text-xl'>Bill details</h1>
                <div className='flex justify-between items-center'>
                  <h1
                    className='flex gap-1 items-center text-gray-700'>
                    <span><LuNotebookText /></span>
                    Items total
                  </h1>

                  <p>${totalPrice}</p>
                </div>
                <div className='flex justify-between items-center'>
                  <h1
                    className='flex gap-1 items-center text-gray-700'>
                    <span><MdDeliveryDining /></span>
                    Delivery Charge
                  </h1>
                  <p
                    className='text-red-600 font-semibold'>
                    <span className='text-gray-600 line-through'>$25</span> FREE
                  </p>

                </div>
                <div className='flex justify-between items-center'>
                  <h1
                    className='flex gap-1 items-center text-gray-700'>
                    <span><GiShoppingBag /></span>
                    Handling Charge
                  </h1>
                  <p className='text-red-600 font-semibold'>$5</p>
                </div>
                <hr className='text-gray-200 mt-2' />
                <div className='flex justify-between items-center'>
                  <h1 className='font-semibold text-lg'>Grand total</h1>
                  <p className='font-semibold text-lg'>${totalPrice + 5}</p>
                </div>
                <div>
                  <h1 className='font-semibold text-gray-700 mb-3 mt-7'>Apply Promo Code</h1>
                  <div className='flex gap-3'>
                    <input type="text" placeholder='Enter code' className='p-2 rounded-md w-full' />
                    <button className='bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md'>Apply</button>
                  </div>
                </div>
                <button
                  className='bg-red-500 text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3'>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex flex-col gap-3 justify-center items-center h-150'>
            <h1 className='text-red-600/80 font-bold text-5xl text-muted'>Oh no! Your cart is empty</h1>
            <img src={emptyCart} alt="" className='w-100' />
            <button onClick={() => navigate('/products')} className='bg-red-600 text-white px-3 py-2 rounded-md cursor-pointer '>Continue Shopping</button>
          </div>
        )}
      </div>
    </section >
  )
}

export default Cart