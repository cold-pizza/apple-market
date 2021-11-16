import "../styles/Myapple.scss";

import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Myapple(props) {
  return (
    <div id="my-apple-box">
      <div className="my-apple-box">
        <section className="profile">
          <StyledLink to="/profile-edit">
            <div className="image">
              <div className="img">{props.viewImg.img}</div>
              <i className="fas fa-camera"></i>
            </div>
          </StyledLink>

          <div className="profile-info">
            <span className="nickname">
              {props.nameArr[props.nameArr.length - 1].names}
            </span>
            <span className="info">#349052</span>
          </div>
          <StyledLink to="/profile-edit">
            <i className="fas fa-chevron-right profile-edit"></i>
          </StyledLink>
        </section>

        <section className="my-report">
          <StyledLink to="/selling">
            <div className="my-info">
              <i className="far fa-file-alt"></i>
              <span>판매내역</span>
            </div>
          </StyledLink>
          <div className="my-info">
            <i className="fas fa-shopping-basket"></i>
            <span>구매내역</span>
          </div>
          <StyledLink to="/interest">
            <div className="my-info">
              <i className="fas fa-heart"></i>
              <span>관심목록</span>
            </div>
          </StyledLink>
        </section>

        <ul className="setting">
          <StyledLink to="/gps">
            <li className="set-list">
              <i class="fas fa-map-marker-alt"></i>
              <p>동네설정</p>
            </li>
          </StyledLink>
          <li className="set-list">
            <i class="far fa-dot-circle"></i>
            <p>동네 인증하기</p>
          </li>
          <li className="set-list">
            <i class="fas fa-tag"></i>
            <p>키워드 알림</p>
          </li>
          <li className="set-list">
            <i class="fas fa-book-open"></i>
            <p>사과가계부</p>
          </li>
          <li className="set-list">
            <i class="fas fa-th-large"></i>
            <p>모아보기</p>
          </li>
          <li className="set-list">
            <i class="fas fa-hashtag"></i>
            <p>관심 카테고리 설정</p>
          </li>
        </ul>

        <ul className="setting">
          <li className="set-list">
            <i class="far fa-edit"></i>
            <p>동네생활 글</p>
          </li>
          <li className="set-list">
            <i class="far fa-comment-dots"></i>
            <p>동네생활 댓글</p>
          </li>
        </ul>
        <ul className="setting">
          <li className="set-list">
            <i class="far fa-envelope"></i>
            <p>친구초대</p>
          </li>
          <li className="set-list">
            <i class="fas fa-share-alt"></i>
            <p>사과마켓 공유</p>
          </li>
          <li className="set-list">
            <i class="fas fa-microphone"></i>
            <p>공지사항</p>
          </li>
          <li className="set-list">
            <i class="fas fa-headset"></i>
            <p>자주 묻는 질문</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Myapple;
