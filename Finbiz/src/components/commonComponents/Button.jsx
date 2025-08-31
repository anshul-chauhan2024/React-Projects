const Button = ({ val, className }) => {
    return (
        <>
            <button
                className={`rounded-lg text-lg border-0 cursor-pointer bg-blue-700 text-white 
              hover:bg-blue-800 duration-300 transition py-[8px] px-[25px] 
              transform active:scale-95 ${className}`}
            >
                {val}
            </button>

        </>
    )
}

export default Button