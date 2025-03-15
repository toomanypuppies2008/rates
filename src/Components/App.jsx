import Rate from "./Rate";
import "../styles/App.css";
import Header from "./Header";
import { useState } from "react";
import data from "../data.json";

function App() {
  const [rate, setRate] = useState(0);

  return (
    <>
      <Header />
      <div className="rates-container">
        {data.map((rate) => (
          <Rate
            key={rate.id}
            price={rate.price}
            speed={rate.speed}
            onClick={() => setRate(rate.id)}
          />
        ))}
      </div>
      <div className="basket">
        {rate ? (
          <>
            <p>Вы выбрали тариф:</p>
            <div className="basket-card">
              {data
                .filter((it) => it.id == rate)
                .map((rate) => (
                  <Rate key={rate.id} price={rate.price} speed={rate.speed} />
                ))}
            </div>
          </>
        ) : (
          <p>Вы пока ничего не выбрали</p>
        )}
      </div>
    </>
  );
}

export default App;
