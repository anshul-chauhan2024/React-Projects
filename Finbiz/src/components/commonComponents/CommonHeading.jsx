
const CommonHeading = ({ small, big, className }) => {
    return (
        <>
            <div className={`commonHeading ${className} `}>
                <h5 className='text-lg font-semibold text-gray-600'>{small}</h5>
                <h2 className='text-4xl md:text-5xl font-bold text-gray-800'>{big}</h2>
            </div >

        </>
    )
}

export default CommonHeading