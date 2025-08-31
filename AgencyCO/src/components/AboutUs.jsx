import "../App.css"
import PrimaryBtn from "./PrimaryBtn"
import images from "../assets/images"
import AboutFeature from "./AboutFeature"

function AboutUs() {
    return (
        <>
            <div className="about_us  py-20">
                <div className="container">
                <div className="grid lg:grid-cols-2 items-center gap-20">
                    <div className="about_content">
                        <h5>About Us</h5>
                        <h2>We help drive your business forward faster</h2>
                        <p>Proactively syndicate open-source e-markets after low-risk high-yield synergy. Professionally simplify visionary technology before team driven sources.</p>

                        <div className="grid md:grid-cols-2">
                            <AboutFeature title='Increase conversion'
                                disciption='Display recent conversions, build credibility and trust.'
                            />

                            <AboutFeature title='Product analytics'
                                disciption='A top promo bar that counts down until a few discounts.'
                            />
                        </div>

                        <PrimaryBtn BtnVal="View Details" />
                    </div>
                    <div className="aboutImg flex justify-center">
                        <img src={images.aboutImg} alt="About Image"  />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs