import CommonHeading from '../commonComponents/CommonHeading'
import images from '../../images/images'
import Button from '../commonComponents/Button'

const AboutSection = () => {
    return (
        <>
            <div className="container py-15">
                <div className="grid lg:grid-cols-2 ">
                    <div>
                        <CommonHeading small='About Our Company' big='Professional And Dedicated Consulting Services' />

                        <p className='my-5 mb-10 text-lg'>We are licensed and insured with over 14 years of experience in providing
                            United States with top-rated USA business services</p>

                        <div className='flex gap-5 '>
                            <div className='w-[70%] border-1 border-gray-200'>
                                <h5 className='cursor-pointer  text-blue-700 font-semibold  py-2 px-4 border-bottom-1 border-gray-200'>01. The Great Mission</h5>
                                <h5 className='cursor-pointer hover:text-blue-700 transition duration-300 font-semibold text-gray-600 py-2 px-4 border-bottom-1 border-gray-200'>02. Amazing Vision</h5>
                                <h5 className='cursor-pointer hover:text-blue-700 transition duration-300 font-semibold text-gray-600 py-2 px-4 '>03. Our Destination</h5>
                            </div>

                            <div>
                                <p>Massa laoreet lacinia placerat eleifend cs curae imperdiet mattis taciti, scelerisque elementum velit ullamcorper praesent enim temp</p>

                                <ul className='my-2' style={{listStyle:'disc',paddingLeft:'1rem'}}>
                                    <li>Ultricies tellus cubilia at rutrum lobortis dui quis aliquam</li>
                                    <li>Eu nisi quam senectus odio commodo quam pellente</li>
                                </ul>

                                <Button val='Contact Us'/>
                            </div>
                        </div>
                    </div>
                    <div className='abImg relative mt-15 lg:m-0 flex items-center justify-center' >
                        <img src={images.abImg} alt=""  className='lg:float-end'/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutSection