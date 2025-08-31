import CommonHeading from '../commonComponents/CommonHeading'
import ServiceBox from './ServiceBox';
import images from '../../images/images'


const ServiceSection = () => {
    return (
        <>
            <div className="serviceSection py-20">
                <div className="container">
                    
                    <CommonHeading
                        small='Our Latest Services'
                        big='Service We Provide'
                    />

                    <div className="sereBoxes  grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">
                        <ServiceBox title='Business Solution' img={images.serv1} />
                        <ServiceBox title='Creative Ideas' img={images.serv2} />
                        <ServiceBox title='Market Research' img={images.serv3} />
                        <ServiceBox title='Best Solution' img={images.serv4} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSection