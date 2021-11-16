import "../styles/Shopping.scss";

function Shopping(props) {
  return (
    <div id="shopping">
      <nav>
        <i
          onClick={() => {
            props.history.goBack();
          }}
          className="fas fa-arrow-left"
        ></i>
        <span>동네장보기</span>
        <div></div>
      </nav>

      <section className="category">
        <div>전체</div>
        <div>과일 채소 곡물</div>
        <div>정육 수산</div>
        <div>카페 디저트</div>
        <div>즉석 가공식품</div>
      </section>
      <section className="store-list">
        <div className="item">
          <img src="images/meat.jpg" alt="#" />
          <div className="info">
            <div className="info-header">
              <span className="title">농부고기 율하점</span>
              <span className="gps">3.1km 율하동</span>
            </div>
            <span className="comment">
              안녕하세요 농부고기백화점입니다! 저희는 투뿔한우와 1등급 한돈을
              판매합니다 최고급등급의 고기만 취급을 하며 항상 신선한 고기로
              고객님들께 다가가겠습니다. 감사합니다!
            </span>
            <span className="info-footer">단골 9 | 정육점</span>
          </div>
        </div>

        <div className="item">
          <img src="images/meat.jpg" alt="#" />
          <div className="info">
            <div className="info-header">
              <span className="title">농부고기 율하점</span>
              <span className="gps">3.1km 율하동</span>
            </div>
            <span className="comment">
              안녕하세요 농부고기백화점입니다! 저희는 투뿔한우와 1등급 한돈을
              판매합니다 최고급등급의 고기만 취급을 하며 항상 신선한 고기로
              고객님들께 다가가겠습니다. 감사합니다!
            </span>
            <span className="info-footer">단골 9 | 정육점</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shopping;
