import "../styles/LifeService.scss";

function LifeService(props) {
  return (
    <div id="life-service">
      <nav>
        <i
          onClick={() => {
            props.history.goBack();
          }}
          className="fas fa-arrow-left"
        ></i>
        <span>생활서비스</span>
        <div></div>
      </nav>

      <section className="item">
        <img src="images/cleanlab.png" alt="#" />
        <div className="info">
          <span className="title">청소연구소</span>
          <span className="ment">청소를 바꿉니다. 생활을 바꿉니다.</span>
          <span className="stars">즐겨찾기 17,493</span>
        </div>
      </section>
      <section className="item">
        <img src="images/gs25.png" alt="#" />
        <div className="info">
          <span className="title">GS 마감할인판매</span>
          <span className="ment">
            GS25와 GS 수퍼마켓의 마감할인상품이 사과마켓에 도착했어요!
          </span>
          <span className="stars">즐겨찾기 76,493</span>
        </div>
      </section>
    </div>
  );
}

export default LifeService;
