import CommonHeading from "../commonComponents/CommonHeading"
import TeamBoxes from "./TeamBoxes"
import images from "../../images/images"

const TeamSection = () => {
    return (
        <div className='teamSection my-20 pb-20'>
            <div className="container">
                <CommonHeading small='Professionals Team' big='Professionals Team' className='text-center' />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                    <TeamBoxes img={images.team1} name='Kevin Martin' position='CEO'/>
                    <TeamBoxes img={images.team2} name='Rosy Jonson' position='Manager' className='mt-30 md:mt-0'/>
                    <TeamBoxes img={images.team3} name='Jack Smith' position='Consultant' className='mt-30 lg:mt-0'/>
                </div>
            </div>
        </div>
    )
}

export default TeamSection