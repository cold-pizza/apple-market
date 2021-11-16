import "../styles/Coupon.scss";

function Coupon(props) {
  return (
    <div id="coupon">
      <nav>
        <i
          className="fas fa-times"
          onClick={() => {
            props.history.goBack();
          }}
        ></i>
        <h1>우리 동네 쿠폰북</h1>
        <div></div>
      </nav>

      <section className="category">
        <div className="tag">전체</div>
        <div className="tag">음식</div>
        <div className="tag">뷰티</div>
        <div className="tag">생활</div>
        <div className="tag">운동/취미</div>
        <div className="tag">기타</div>
      </section>

      <section className="coupon-item">
        <div className="profile">
          <img
            className="image"
            src="images/beauty.jpg"
            alt="images/beauty.jpg"
          />
          <div className="meta-info">
            <span>momo.s_beauty</span>
            <span>대청동</span>
          </div>
        </div>

        <section className="coupon-pack">
          <div className="coupon-name">
            <span>스킨플래닝1회체험7만원</span>
            <span>2021년 12월 31일까지</span>
          </div>
          <div className="coupon-download">
            <i class="fas fa-arrow-down"></i>
            <span>쿠폰받기</span>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Coupon;
