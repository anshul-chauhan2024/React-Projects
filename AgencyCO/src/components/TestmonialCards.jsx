


function TestmonialCards({name,img,position}) {
    return (
        <>
            <div className="testimonials_cards w-[90%] mt-10 border-1 border-gray-200 p-5 mx-auto">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis ab beatae ea perferendis sint minus velit...
                </p>

                <div className="flex gap-3 items-center mt-3">
                    <img src= {img} className="h-15 w-15 rounded-full"  alt="Images" />
                    <div>
                        <h5 className="text-xl font-bold">{name}</h5>
                        <p>{position}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestmonialCards