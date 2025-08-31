import CommonHeading from "../commonComponents/CommonHeading"
import ProcessCard from "./ProcessCard"
import images from "../../images/images"

const WorkProcessSetion = () => {
    return (
        <>
            <div className="container mb-20">
                <CommonHeading small='Working Steps' big='Our Basic Work Process' className='text-center' />

                <div className="grid md:grid-cols-2 justify-center lg:grid-cols-4 gap-10 lg:gap-0 mt-10">
                    <ProcessCard
                        img={images.process1}
                        heading='Make a Plan'
                        no='01'
                        className='w-40 h-40 '
                    />

                    <ProcessCard
                        img={images.process2}
                        heading='Cost Calculating'
                        no='02'
                        className='w-55 h-55'
                        right='right-5'
                    />

                    <ProcessCard
                        img={images.process3}
                        heading='Business Growth'
                        no='03'
                        className='w-55 lg:w-40 h-55 lg:h-40 '
                    />

                    <ProcessCard
                        img={images.process4}
                        heading='Success Mission'
                        no='04'
                        className='w-40 lg:w-55 h-40 lg:h-55'
                        right='right-5'
                    />
                </div>
            </div>

        </>
    )
}

export default WorkProcessSetion