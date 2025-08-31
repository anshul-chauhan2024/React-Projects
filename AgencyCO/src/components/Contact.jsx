import PrimaryBtn from "./PrimaryBtn"

function Contact() {
    return (
        <>
            <div className="contact_sec py-20">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="contact_left">
                            <h2 className="text-2xl mb-3 font-bold">Contact with us</h2>
                            <p>
                                It's very easy to get in touch with us. Just use the contact form or pay us a visit for a coffee at the office. Dynamically innovate competitive technology after an expanded array of leadership.
                                <br />
                                Head Office
                                <br />
                                121 King St, Melbourne VIC 3000, Australia
                            </p>

                            <p className="mt-5 mb-1">Phone: +91 1234567890</p>
                            <p>Email: <a href="#" className="text-blue-500">abc@gmail.com</a></p>
                        </div>

                        <div className="contact_right">
                            <h3 className="text-xl font-bold">Reach us quickly</h3>
                            <form action="#">
                                <div className="grid grid-cols-2 gap-5 mt-3 rounded">
                                    <input type="text" placeholder="Enter name"  className="border-1 border-gray-200 p-3 bg-white"/>
                                    <input type="email" placeholder="Enter email"  className="border-1 border-gray-200 p-3 bg-white"/>
                                </div>
                                <div className="grid grid-cols-2 gap-5 mt-3 rounded">
                                    <input type="text" placeholder="Your phone"  className="border-1 border-gray-200 p-3 bg-white"/>
                                    <input type="text" placeholder="Your company"  className="border-1 border-gray-200 p-3 bg-white"/>
                                </div>

                                <textarea rows='5' className="border-1 border-gray-200 p-3 bg-white block w-[100%] mt-3 rounded" placeholder="Message"></textarea>

                                <PrimaryBtn BtnVal='Send Message'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact