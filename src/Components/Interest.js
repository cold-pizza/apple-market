import "../styles/Interest.scss";
import React from "react";

function Interest(props) {
  return (
    <div id="interest">
      <nav>
        <i
          onClick={() => {
            props.history.goBack();
          }}
          class="fas fa-arrow-left"
        ></i>
        <span>관심목록</span>
        <div></div>
      </nav>

      <div className="interest-box">
        {props.interestItem.map(({ img, name, gps, day, price, like, id }) => {
          return (
            <section className="interest-item">
              <div className="image">
                <img src={img} alt={img} />
              </div>
              <div className="meta-info">
                <span className="title">{name}</span>
                <span className="gps">
                  {gps}•{props.timeForToday(day)}
                </span>
                <span className="price">
                  {JSON.parse(price).toLocaleString("ko-KR")}원
                </span>
              </div>

              <div className="action-box">
                <div className="actions">
                  <div className="action-icon">
                    <i class="far fa-comments"></i>
                    <span>2</span>
                  </div>
                  <div className="action-icon">
                    <i
                      className="far fa-heart"
                      style={{
                        color:
                          props.goods.active === true
                            ? "#ff6969"
                            : "rgba(0, 0, 0, 0.5)",
                      }}
                    ></i>
                    <span>{like}</span>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Interest;
