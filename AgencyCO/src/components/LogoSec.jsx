import images from "../assets/images/index.js"

function LogoSec (){
    return (
        <>
        <div className="logoSection">
            <div className="lg:flex justify-between text-center lg:text-left">
                <h4 className="mb-8 lg:mb-0">Trusted by companies like:</h4>

                <div className="logos flex flex-wrap justify-center gap-15">
                    <img src= {images.client_1} alt="Client 1" />
                    <img src= {images.client_2} alt="Client 2" />
                    <img src= {images.client_3} alt="Client 3" />
                    <img src= {images.client_4} alt="Client 4" />
                    <img src= {images.client_5} alt="Client 5" />
                </div>
            </div>
        </div>
        </>
    )
}

export default LogoSec