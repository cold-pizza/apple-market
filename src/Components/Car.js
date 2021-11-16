import { useState } from "react";
import "../styles/Car.scss";

function Car(props) {
  const [usedCar, setUsedCar] = useState([
    {
      title: "로디우스 11인승 판매합니다.",
      img: "images/l.jpg",
      gps: "자은동",
      day: "5시간전",
      price: "260만원",
    },
    {
      title: "모닝 16만키로 수리후 판매",
      img: "images/m.jpg",
      gps: "관동동",
      day: "9시간전",
      price: "100만원",
    },
    {
      title: "아반떼 판매합니다",
      img: "images/a.jpg",
      gps: "율하동",
      day: "12시간전",
      price: "1800만원",
    },
  ]);
  return (
    <div id="car">
      <nav>
        <i
          className="fas fa-times"
          onClick={() => {
            props.history.goBack();
          }}
        ></i>
        <h1>중고차</h1>

        <i class="far fa-edit"></i>
      </nav>
      {usedCar.map(({ title, img, price, gps, day }) => {
        return (
          <section className="item">
            <div className="info">
              <img src={img} alt={img} />
              <div className="meta-data">
                <span className="title">{title}</span>
                <span className="gps-day">
                  {gps}•{day}
                </span>
                <span className="price">{price}</span>
              </div>
            </div>
            <i class="fas fa-ellipsis-v more-btn"></i>
          </section>
        );
      })}
    </div>
  );
}

export default Car;
