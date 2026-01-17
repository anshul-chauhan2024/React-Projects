
const Contact = () => {
  return (
    <div className="lg:min-h-screen  flex items-center justify-center px-5 py-10">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-7xl bg-linear-to-r from-red-800 via-red-600 to-red-700">
        <h2 className="text-4xl font-bold text-white text-center mb-10">Get in Touch with <span >Mini Store</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Info Section */}
          <div className="text-white space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Contact Info</h3>
              <p >Have a question or need support? We're here to help you with your electronics journey.</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p><strong>📍 Address:</strong> 123 Tech Lane, Kolkata, India</p>
              <p><strong>📧 Email:</strong> support@ministore.com</p>
              <p><strong>📞 Phone:</strong> +91 1234567890</p>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-5">
            <div>
          
              <input type="text" placeholder="Your Name" 
              className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
           
              <input type="email" placeholder="Email Address" 
              className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
       
              <textarea rows="4" placeholder="Type your message..." 
              className="w-full px-4 py-2 bg-white border border-white/30 text-white rounded-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-red-600 font-semibold py-2 rounded-full hover:opacity-90 transition-all duration-300">
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;