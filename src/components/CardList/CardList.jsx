import Card from "../Card/Card";
import "./CardList.scss";

const CardList = ({ arr }) => {
    return (
        <>
            <div className="card_list">
                {arr.map((tariff, index) => (
                    <Card tariff={tariff} key={index} />
                ))}
            </div>
        </>
    );
};
export default CardList;
