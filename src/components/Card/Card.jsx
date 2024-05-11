import "./Card.scss";
const Card = ({ tariff }) => {
    const { title, price, speed, info, color, status } = tariff;
    return (
        <div className={`card card_${status}`}>
            <div className={`card_title card_title_${color}`}>{title}</div>
            <div className={`card_price card_price_${color}`}>
                руб <span className="price">{price}</span>/мес
            </div>
            <div className="card_speed">{speed}</div>
            <div className="card_info">{info}</div>
        </div>
    );
};
export default Card;
