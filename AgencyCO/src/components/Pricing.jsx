import PricingCards from "./PricingCards"

function Pricing() {
    return (
        <>

            <div className="pricing_sec py-20">
                <div className="container">
                    <div className="common_heading text-center lg:sw-[50%] mx-auto">
                        <h2 className="text-[32px] mb-3 font-semibold">Pricing Packages</h2>
                        <p>Monotonectally grow strategic process improvements vis-a-vis integrated resources.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
                        <PricingCards
                            value={49}
                            priceName="Basic Plan"
                            support='6 months technical support'
                            keywords='10+ profitable keyword'
                        />

                        <PricingCards
                            value={99}
                            priceName="Popular Plan"
                            support='1 Year technical support'
                            keywords='50+ profitable keyword'

                            className = 'p-30'
                        />

                        <PricingCards
                            value={199}
                            priceName="Business Plan"
                            support='2 Year technical support'
                            keywords='200+ profitable keyword'
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Pricing