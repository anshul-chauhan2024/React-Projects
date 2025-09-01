import ServiceBox from "./ServicePageBox"
import images from "../../images/images"

const ServicePageBoxes = () => {
    return (
        <div className="mt-20">
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceBox
                        img={images.servPage1}
                        name='Strategy Growth'
                        no='01'
                    />
                    <ServiceBox
                        img={images.servPage2}
                        name='Grow Business'
                        no='02'
                    />
                    <ServiceBox
                        img={images.servPage3}
                        name='Proudly Speech'
                        no='03'
                    />
                    <ServiceBox
                        img={images.servPage2}
                        name='Model Building'
                        no='04'
                    />
                    <ServiceBox
                        img={images.servPage1}
                        name='Solution Model'
                        no='05'
                    />
                    <ServiceBox
                        img={images.servPage3}
                        name='Finbiz Solution'
                        no='06'
                    />
                </div>
            </div>
        </div>
    )
}

export default ServicePageBoxes