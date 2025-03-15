import "../styles/App.css";

export default function Rate(props) {
  let className = "card";
  let backgroundColor = "";
  switch (props.price) {
    case 300:
      backgroundColor += "blue";
      break;
    case 450:
      backgroundColor += "green";
      break;
    case 550:
      backgroundColor += "red";
      className += " bigger_card";
      break;
    case 1000:
      backgroundColor += "black";
      break;
  }

  return (
    <>
      <div className={className} onClick={props.onClick}>
        <header className={backgroundColor}>
          Безлимитный <span className="header_price">{props.price}</span>
        </header>
        <main className={backgroundColor}>
          <span className="rub">руб </span>
          <span className="price">{props.price}</span>
          <span className="month"> /мес</span>
        </main>
        <div className="card_speedInfo">
          <p>
            До <span>{props.speed}</span> мбит/сек
          </p>
        </div>
        <footer className="card_footer">
          <p>Обьем включенного трафика не ограничен</p>
        </footer>
      </div>
    </>
  );
}
