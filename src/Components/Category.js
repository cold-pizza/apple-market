import "../styles/Category.scss";

function Category(props) {
  return (
    <div id="category">
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

      <section className="item-list">
        <div className="items">
          <div className="item">
            <p>⭐️</p>
            <span>인기매물</span>
          </div>
          <div className="item">
            <p>🖼</p>
            <span>가구/인테리어</span>
          </div>
          <div className="item">
            <p>🎀</p>
            <span>유아도서</span>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <p>🖥</p>
            <span>디지털기기</span>
          </div>
          <div className="item">
            <p>👶</p>
            <span>유아동</span>
          </div>
          <div className="item">
            <p>🏀</p>
            <span>스포츠/레저</span>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <p>📻</p>
            <span>생활가전</span>
          </div>
          <div className="item">
            <p>🌡</p>
            <span>생활/가공식품</span>
          </div>
          <div className="item">
            <p>👩</p>
            <span>여성잡화</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Category;
