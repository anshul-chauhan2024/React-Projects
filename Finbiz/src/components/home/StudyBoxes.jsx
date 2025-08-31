const StudyBoxes = ({img,heading}) => {
    return (
        <div className='studyBox rounded-3xl overflow-hidden relative'>
            <img src={img} alt="Images" className="transition duration-500" />

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] text-center bg-white rounded-2xl p-5 overflow-hidden">
                <h5 className="text-2xl font-semibold">{heading}</h5>
                <p className="">Business Strategy</p>
            </div>
        </div>
    )
}

export default StudyBoxes