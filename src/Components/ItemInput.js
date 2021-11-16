import React from "react";
import "../styles/ItemInput.scss";

function ItemInput(props) {
  return (
    <div id="item-input-form">
      <div className="input-form">
        <nav className="nav">
          <button
            onClick={() => {
              props.history.goBack();
            }}
            className="close-btn"
          >
            닫기
          </button>
          <span>중고거래 글쓰기</span>
          <button onClick={props.onCreate} className="done-btn">
            완료
          </button>
        </nav>

        <section className="camera">
          <label className="pictures" for="input-file">
            <i class="fas fa-camera"></i>
            <span>{props.num}/1</span>
          </label>
          <div id="preview"></div>
        </section>
        <input
          onChange={props.onChange}
          name="name"
          value={props.name}
          className="title"
          type="text"
          placeholder="글 제목"
        />
        <input
          onChange={props.onChange}
          name="price"
          value={props.price}
          className="price"
          type="textarea"
          placeholder="$ 가격"
        />
        <input
          onChange={props.onChange}
          name="gps"
          value={props.gps}
          className="explanation"
          type="text"
          placeholder="위치"
        />
      </div>
      <input
        onChange={props.upLoadImg}
        name="input-url"
        type="file"
        id="input-file"
      />
    </div>
  );
}
export default ItemInput;
