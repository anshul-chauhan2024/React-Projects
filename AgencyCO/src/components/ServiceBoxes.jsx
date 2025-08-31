import '../App.css'

function ServiceBoxes({ icon, title, discription }) {
    return (
        <>
            <div className="service_box text-center border-1 border-gray-200 p-10 bg-white">
                <div className="serv_icon mb-2">{icon} </div>
                <h4 className='text-xl font-bold mb-2'>{title} </h4>
                <p className='text-[15px] text-gray-600'>{discription} </p>

            </div>
        </>
    )
}

export default ServiceBoxes