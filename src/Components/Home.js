import "../styles/Home.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Home(props) {
  return (
    <div id="items-box">
      {props.goods.map(({ id, name, img, price, gps, day, active, like }) => {
        return (
          <div className="items-box">
            <section className="imgAndInfo">
              <img src={img} alt={img} className="image" />
              <div className="img-info">
                <span>{name}</span>
                <span>
                  {gps}•{props.timeForToday(day)}
                </span>
                <span>{Number(price).toLocaleString("ko-KR")}원</span>
              </div>
            </section>
            <section className="actions-box">
              <div className="actions">
                <div className="action-icon">
                  <i class="far fa-comments"></i>
                  <span>2</span>
                </div>

                <div className="action-icon">
                  <i
                    onClick={() => {
                      props.heartClick(id);
                    }}
                    style={{
                      color: active === true ? "#ff6969" : "rgba(0, 0, 0, 0.5)",
                    }}
                    className="far fa-heart"
                  ></i>
                  <span>{like}</span>
                </div>
              </div>
            </section>
          </div>
        );
      })}
      <StyledLink to="/iteminput">
        <div className="addBtn">
          <i className="fas fa-plus"></i>
        </div>
      </StyledLink>
    </div>
  );
}

export default Home;
