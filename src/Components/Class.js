import "../styles/Class.scss";

function Class(props) {
  return (
    <div id="class">
      <nav>
        <i
          onClick={() => {
            props.history.goBack();
          }}
          className="fas fa-arrow-left"
        ></i>
        <span>과외/클래스</span>
        <div></div>
      </nav>

      <section className="item">
        <div className="info">
          <img src="#" alt="#" />
          <div className="meta-data">
            <span className="title">버스킹 공연팀 모집</span>
            <span className="gps-day">장유3동•1일전</span>
            <span className="price">50,000원</span>
          </div>
        </div>
        <i class="fas fa-ellipsis-v more-btn"></i>
      </section>
    </div>
  );
}

export default Class;
