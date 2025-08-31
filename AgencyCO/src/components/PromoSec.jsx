import '../App.css'
import images from '../assets/images/index.js'
import PromoBox from './PromoBox.jsx'

function PromoSec() {
    return (
        <>

            <div className="promo_container container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 text-center gap-10">
                    <PromoBox image={images.promo_1}
                        title="Convert traffic into sales"
                        discription="Increase sales by showing true dynamics of your website. Build your online store’s trust using Social Proof & Urgency for your business." />

                    <PromoBox image={images.promo_2}
                        title="Increase store trust"
                        discription="Build your online store’s trust using Social Proof & Urgency. Realize importance of social proof in customer’s purchase decision." />

                    <PromoBox image={images.promo_3}
                        title="Growth guaranteed"
                        discription="Realize importance of social proof in customer’s purchase decision. Increase sales by showing true dynamics of your website." />
                </div>
            </div>

        </>
    )
}

export default PromoSec