import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
function AboutFeature({ title, disciption ,bgcolor}) {

    return (
        <>
            <div className='ab_feature mb-3'>
                <div className="flex gap-2 items-center mb-3 mt-10">
                    <div className="ab_icon rounded bg-orange-300" ><AccessAlarmIcon />     </div>
                    <h6 className='text-[18px]'>{title}</h6>
                </div>

                <p> {disciption} </p>
            </div>
        </>
    )
}

export default AboutFeature