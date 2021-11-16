import "../styles/PartTime.scss";

function PartTime(props) {
  return (
    <div id="part-time">
      <nav>
        <i
          className="fas fa-times"
          onClick={() => {
            props.history.goBack();
          }}
        ></i>
        <h1>사과알바</h1>

        <i class="far fa-edit"></i>
      </nav>

      <section className="item">
        <div className="titles">
          <span className="gps">율하두찜 관동동 약 16시간 전</span>
          <span className="title">율하두찜 파트타임 구합니다</span>
        </div>
        <div className="info">
          <div className="meta-info">
            <span className="price">시급 8,720원</span>
            <span className="period">월~수</span>
            <span className="time">17:30 - 20:30</span>
          </div>
          <img className="image" src="images/zzim.jpg" alt="images/zzim.jpg" />
        </div>
      </section>
    </div>
  );
}

export default PartTime;
