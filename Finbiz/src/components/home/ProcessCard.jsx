

const ProcessCard = ({ img, heading, no, className, right }) => {
    return (
        <div className="processBox text-center cursor-pointer">
            <div className={` relative processImg rounded-full bg-white p-5 border-2 transition duration-300  hover:border-blue-700 border-blue-300 border-dashed flex items-center justify-center mx-auto ${className} `}>
                <img src={img} alt="" className="w-15" />

                <p className={`absolute top-2 transition duration-300 right-0 h-10 w-10 rounded-full bg-blue-700 text-white flex items-center justify-center ${right}`}>{no}</p>
            </div>

            <h5 className="text-xl my-3 font-semibold">{heading}</h5>
            <p>Nostra proin fusce hendrerit viverra nisl torquent</p>
        </div>
    )
}

export default ProcessCard