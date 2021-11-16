import "../styles/Selling.scss";

function Selling(props) {
  return (
    <div id="sellings">
      <nav className="nav">
        <i
          onClick={() => {
            props.history.goBack();
          }}
          class="fas fa-arrow-left"
        ></i>
        <span>판매내역</span>
        <div></div>
      </nav>
      {props.goods.map(({ id, img, name, price, gps, day }) => {
        return (
          <div className="selling-box">
            <section className="sell-info">
              <img src={img} alt={img} />
              <div className="meta-info">
                <span className="title">{name}</span>
                <span className="gps">
                  경남 김해시•{props.timeForToday(day)}
                </span>
                <span className="price">
                  {JSON.parse(price).toLocaleString("ko-KR")}원
                </span>
              </div>
              <div></div>
            </section>

            <section className="btns">
              <button>수정</button>
              <button
                onClick={() => {
                  props.onRemove(id);
                }}
              >
                판매완료/제거
              </button>
            </section>
          </div>
        );
      })}
    </div>
  );
}

export default Selling;
