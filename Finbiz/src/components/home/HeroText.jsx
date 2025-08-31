import Button from '../commonComponents/Button'

const HeroText = ({heading}) => {
    return (
        <>

            <div className="w-[100%] heroText absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-3 text-center text-white">
                <h5 className='text-xl font-semibold'>20+ Years In Business</h5>
                <h2 className=' text-4xl sm:text-5xl md:text-7xl my-8 font-light'>
                    {heading}
                    Is
                    <span className='font-bold'> Our </span>
                    Dedication
                </h2>

                <Button val='View Solutions' />
            </div>

        </>
    )
}

export default HeroText