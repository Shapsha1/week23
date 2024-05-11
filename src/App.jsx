import "./style/App.css";
import CardList from "./components/CardList/CardList.jsx";
const tariffs = [
    {
        title: "Безлимитный 300",
        price: "300",
        speed: "до 10 Мбит/сек",
        info: "Объем включенного трафика не ограничен",
        color: "blue",
        status: "unchosen",
    },
    {
        title: "Безлимитный 450",
        price: "450",
        speed: "до 50 Мбит/сек",
        info: "Объем включенного трафика не ограничен",
        color: "green",
        status: "unchosen",
    },
    {
        title: "Безлимитный 550",
        price: "550",
        speed: "до 100 Мбит/сек",
        info: "Объем включенного трафика не ограничен",
        color: "red",
        status: "chosen",
    },
    {
        title: "Безлимитный 1000",
        price: "1000",
        speed: "до 200 Мбит/сек",
        info: "Объем включенного трафика не ограничен",
        color: "black",
        status: "unchosen",
    },
];

function App() {
    return <CardList arr={tariffs} />;
}

export default App;
