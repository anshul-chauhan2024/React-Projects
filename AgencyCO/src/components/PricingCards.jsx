import PrimaryBtn from "./PrimaryBtn"

function PricingCards({ support, keywords, value, priceName , className}) {
    return (
        <>
            <div className="price_card w-[90%] mx-auto text-center bg-white p-10 shadow-lg border-1 border-gray-200 mt-10 rounded-[10px]">
                <h2 className="text-[32px] font-bold">$ <span>{value}</span></h2>
                <p className="text-xl font-bold mt-2">{priceName}</p>
                <div className="h-[1px] w-full bg-gray-200 lg:my-10 md:my-5"></div>
                <div className="pr_card_content">
                    <p>Push Notifications</p>
                    <p>Data Transfer</p>
                    <p>SQL Database</p>
                    <p>Search & SEO Analytics</p>
                    <p>24/7 Phone Support</p>
                    <p>{support}</p>
                    <p>{keywords}</p>
                </div>

                <PrimaryBtn BtnVal='Purchase Now'/>
            </div>
        </>
    )
}

export default PricingCards