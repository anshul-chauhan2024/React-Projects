import CommonHeading from '../commonComponents/CommonHeading'

const Form = () => {
    return (
        <>
            <section>
                <CommonHeading small='Get In Touch' big='Needs Help? Let’s Get in Touch' />

                <form action="#" className='flex flex-col gap-3 mt-10'>
                    <div className='flex gap-4'>
                        <input
                            type="text" name="name" id="name"
                            className='bg-white p-3 w-[50%] border-1 border-gray-200 rounded-lg'
                            placeholder='Name *'
                            required
                        />
                        <input
                            type="email" name="email" id="email"
                            className='bg-white p-3 w-[50%] border-1 border-gray-200 rounded-lg'
                            placeholder='Email *'
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="text" name="subject" id="subject"
                            className='bg-white p-3 w-[100%] border-1 border-gray-200 rounded-lg '
                            placeholder='Subject *'
                            required
                        />
                    </div>

                    <div>
                        <textarea
                            name="message" id="message" rows='5'
                            className='bg-white p-3 w-[100%] border-1 border-gray-200 rounded-lg '
                            placeholder='Message *'
                            required
                        ></textarea>
                    </div>

                    <button type='submit'
                        className={`rounded-lg text-lg border-0 cursor-pointer bg-blue-700 text-white 
                   hover:bg-blue-800 duration-300 transition py-[8px] px-[25px] 
                   transform active:scale-95 `}
                    >
                        Send Message
                    </button>
                </form>
            </section>
        </>
    )
}

export default Form