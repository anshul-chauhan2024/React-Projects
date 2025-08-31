import images from '../assets/images/index.js'
import PrimaryBtn from './PrimaryBtn'
import '../App.css'


function HeroSection() {
    return (
        <>
            <div className="hero_section">
                <img src={images.heroImg} alt="" />


                <div className='banner_content grid lg:grid-cols-2 items-center  gap-20'>
                    <div className="banner_text">
                        <h2>We are Digital Agency & Marketing</h2>
                        <p>Quickly morph client-centric results through performance based applications. Proactively facilitate professional human capital for cutting-edge.</p>

                        <PrimaryBtn BtnVal="Get Start New" />
                    </div>
                    <div className="banner_image flex justify-center">
                        <img src={images.laptop} className='laptopImg' alt="Laptop Image" />
                        <img src={images.laptopTop} className='laptopTop' alt="Laptop Top Image" />
                        <img src={images.laptopLeft} className='laptopLeft' alt="Laptop Left Image" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroSection