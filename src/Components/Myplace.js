import "../styles/Myplace.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Myplace() {
  return (
    <div id="my-place-box">
      <section className="input-form">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="장유 2동 주변 가게를 찾아보세요" />
      </section>

      <div className="line"></div>
      <div className="menus-list">
        <section className="icon-menus">
          <StyledLink to="/coupon">
            <div className="menu">
              <p>🔖</p>
              <span>쿠폰북</span>
            </div>
          </StyledLink>
          <StyledLink to="/shopping">
            <div className="menu">
              <p>🍎</p>
              <span>동네 장보기</span>
            </div>
          </StyledLink>
          <StyledLink to="/parttime">
            <div className="menu">
              <p>⛹️</p>
              <span>동네알바</span>
            </div>
          </StyledLink>
          <StyledLink to="/class">
            <div className="menu">
              <p>📝</p>
              <span>과외/클래스</span>
            </div>
          </StyledLink>
        </section>
        <section className="icon-menus">
          <StyledLink to="/realestate">
            <div className="menu">
              <p>🏠</p>
              <span>부동산</span>
            </div>
          </StyledLink>
          <StyledLink to="/car">
            <div className="menu">
              <p>🚘</p>
              <span>중고차</span>
            </div>
          </StyledLink>
          <StyledLink to="/support">
            <div className="menu">
              <p>💵</p>
              <span>국민지원금</span>
            </div>
          </StyledLink>
          <StyledLink to="/lifeservice">
            <div className="menu">
              <p>💁‍♂️</p>
              <span>생활 서비스</span>
            </div>
          </StyledLink>
        </section>
      </div>
    </div>
  );
}

export default Myplace;
