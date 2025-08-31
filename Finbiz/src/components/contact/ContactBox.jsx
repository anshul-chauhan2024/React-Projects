const ContactBox = ({img,icon,name,text}) => {
    return (
        <div className=" rounded-2xl bg-white overflow-hidden shadow-lg cursor-pointer">
            <div className="h-[70%] w-[100%] overflow-hidden">
                <img src={img} className="h-[100%] w-[100%] object-cover transition duration-500 hover:scale-115" alt="Contact Image" />
            </div>
            <div className="flex gap-4 bg-blue-100 p-7 items-center">
                <p  className="text-5xl text-blue-700">{icon}</p>
                <div>
                    <h5 className=" font-semibold text-blue-700">{name}</h5>
                    <p className="text-xl font-semibold hover:text-blue-700 transition duration-300">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactBox