import "../styles/RealEstate.scss";
function RealEstate(props) {
  return (
    <div id="real-estate">
      <nav>
        <i
          onClick={() => {
            props.history.goBack();
          }}
          className="fas fa-arrow-left"
        ></i>
        <span>부동산</span>
        <div></div>
      </nav>

      <section className="item">
        <div className="info">
          <img src="#" alt="#" />
          <div className="meta-data">
            <span className="title">어방동 메가커피 인수</span>
            <span className="gps-day">장유1동•1일전</span>
            <span className="price">1원</span>
          </div>
        </div>
        <i class="fas fa-ellipsis-v more-btn"></i>
      </section>
    </div>
  );
}

export default RealEstate;
