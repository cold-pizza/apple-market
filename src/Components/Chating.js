import "../styles/Chating.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Chating(props) {
  const { id } = useParams();
  const [ment, setMent] = useState([{ comments: "안녕하세욧" }]);
  const [addChat, setAddChat] = useState({ comments: "" });

  const { comments } = addChat;

  const onChangeChat = (e) => {
    const { name, value } = e.target;
    setAddChat({ ...addChat, [name]: value });
  };

  const onCreateChat = () => {
    const item = { comments };
    setMent([...ment, item]);
    setAddChat({ comments: "" });
  };
  const keyDownCreateChat = () => {
    if (window.event.keyCode === 13) {
      const item = { comments };
      setMent([...ment, item]);
      setAddChat({ comments: "" });
    }
  };

  return (
    <div id="chating">
      <div className="chating-box">
        <nav className="nav-bar">
          <i
            onClick={() => {
              props.history.goBack();
            }}
            class="fas fa-arrow-left"
          ></i>
          <span>{props.goods[id].nick}</span>
          <i class="fas fa-ellipsis-v"></i>
        </nav>
        <section className="item-info">
          <img
            className="image"
            src={props.goods[id].img}
            alt={props.goods[id].img}
          />
          <div className="image-info">
            <span>거래중 • {props.goods[id].name}</span>
            <span>
              {JSON.parse(props.goods[id].price).toLocaleString("ko-KR")}원
            </span>
          </div>
        </section>
        <section className="chat-box">
          <div className="buyer">
            <img
              className="profile"
              src={props.images[id]}
              alt={props.images[id]}
            />

            <span>{props.goods[id].comments}</span>
          </div>

          {ment.map(({ comments }) => {
            return (
              <div className="me">
                <span>{comments}</span>
              </div>
            );
          })}
        </section>
      </div>
      <section className="input-box">
        <input
          onChange={onChangeChat}
          onKeyDown={keyDownCreateChat}
          name="comments"
          value={comments}
          type="text"
          placeholder="댓글 작성"
        />
        <i onClick={onCreateChat} class="far fa-paper-plane"></i>
      </section>
    </div>
  );
}

export default Chating;
