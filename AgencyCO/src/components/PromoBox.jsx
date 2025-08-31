function PromoBox({ image, title, discription }) {
    return (
        <>
            <div className="promo_box">
                <img src={image} alt="Promo 1 Image" />

                <div className="p-5">
                    <h3 className="mb-3">{title}</h3>
                    <p> {discription} </p>
                </div>

            </div>
        </>
    )
}

export default PromoBox