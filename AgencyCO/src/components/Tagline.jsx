import PrimaryBtn from "./PrimaryBtn"

function Tagline() {
    return (
        <>
            <div className="tagline_sec">
                <div className="container h-full">
                    <div className="flex flex-col justify-center items-center h-full text-white">
                        <h2 className="text-4xl font-bold text-center">Discover AgencyCo. It's easier than you think.</h2>
                        <p className="my-3 text-center">Progressively deliver market-driven quality vectors rather than goal-oriented niche markets.</p>

                        <PrimaryBtn BtnVal='Contact Us' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tagline