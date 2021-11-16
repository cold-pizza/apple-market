import "../styles/Support.scss";

function Support(props) {
  return (
    <div id="support">
      <nav>
        <i
          onClick={() => {
            props.history.goBack();
          }}
          className="fas fa-arrow-left"
        ></i>
        <span>국민지원금 사용 가게</span>
        <div></div>
      </nav>

      <section className="item">
        <div className="profile">
          <img src="images/cafe.jpg" alt="#" className="profile-image" />
          <div className="info">
            <span className="name">5월의 그림카페</span>
            <span className="meta-info">10.0km•자은동•11시간전</span>
          </div>
        </div>

        <div className="contents">
          <h1>중장비 케이크</h1>
          <p>
            커피 마시며 그림 그리는 5월의 그림 카페 입니다 ! <br />
            음료 주문시, 도화지 또는 컬러링 도안을 드려요 <br />
            <br />
            📍레터링 케이크 주문제작
            <br />
            📍레터링 케이크 원데이 클래스
            <br />
            📍'월요일' 정기 휴무
          </p>
        </div>

        <div className="images">
          <img src="images/cake1.jpg" alt="#" className="image1" />
          <div className="mini">
            <img src="images/cake2.jpg" alt="#" className="mini-image" />
            <img src="images/cake3.jpg" alt="#" className="mini-image" />
          </div>
        </div>
        <div className="icons">
          <div className="icon">
            <i class="far fa-thumbs-up"></i>
            <span>좋아요</span>
          </div>
          <div className="icon">
            <i class="far fa-comment"></i>
            <span>댓글</span>
          </div>
        </div>
      </section>

      <section className="item">
        <div className="profile">
          <img src="#" alt="#" className="profile-image" />
          <div className="info">
            <span className="name">5월의 그림카페</span>
            <span className="meta-info">10.0km•자은동•11시간전</span>
          </div>
        </div>

        <div className="contents">
          <h1>중장비 케이크</h1>
          <p>
            커피 마시며 그림 그리는 5월의 그림 카페 입니다 ! <br />
            음료 주문시, 도화지 또는 컬러링 도안을 드려요 <br />
            <br />
            📍레터링 케이크 주문제작
            <br />
            📍레터링 케이크 원데이 클래스
            <br />
            📍'월요일' 정기 휴무
          </p>
        </div>

        <div className="images">
          <img src="#" alt="#" className="image1" />
          <div className="mini">
            <img src="#" alt="#" />
            <img src="#" alt="#" />
          </div>
        </div>
        <div className="icons">
          <div className="icon">
            <i class="far fa-thumbs-up"></i>
            <span>좋아요</span>
          </div>
          <div className="icon">
            <i class="far fa-comment"></i>
            <span>댓글</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;
