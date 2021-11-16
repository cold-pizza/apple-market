import "../styles/Notification.scss";

function Notification(props) {
  return (
    <div id="notification">
      <nav>
        <i
          onClick={() => {
            props.history.goBack();
          }}
          className="fas fa-arrow-left"
        ></i>
        <span>카테고리</span>
        <div></div>
      </nav>
      <section className="noti-list">
        <div className="item">
          <img
            className="img"
            src="images/apple-icon.jpg"
            alt="images/apple-icon.jpg"
          />
          <div className="info">
            <span className="comments">
              장유2동사장님께, 사과맨님의 따뜻한 마음을 전해보세요🧡
            </span>
            <span className="days">1일 전</span>
          </div>
        </div>

        <div className="item">
          <img
            className="img"
            src="images/apple-icon.jpg"
            alt="images/apple-icon.jpg"
          />
          <div className="info">
            <span className="comments">
              사과맨님, "아이패드"에 관심 있으신가요?
            </span>
            <span className="days">3일 전</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Notification;
