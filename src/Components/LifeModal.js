import { useState } from "react";
import { useParams } from "react-router-dom";

import "../styles/LifeModal.scss";

function LifeModal(props) {
  const { id } = useParams();
  const num = Number(id) - 1;

  const [inputChat, setInputChat] = useState([
    { chats: "롯데마트 근처에 있어요!" },
  ]);
  const [chatEdit, setChatEdit] = useState({ chats: "" });
  const { chats } = chatEdit;

  const onChange = (e) => {
    const { name, value } = e.target;
    setChatEdit({ ...chatEdit, [name]: value });
  };

  const onCreate = () => {
    const item = { chats };
    setInputChat([...inputChat, item]);
    setChatEdit({ chats: "" });
  };
  const onKeyDown = () => {
    if (window.event.keyCode === 13) {
      const item = { chats };
      setInputChat([...inputChat, item]);
      setChatEdit({ chats: "" });
    }
  };
  return (
    <div id="modal-box">
      return (
      <div className="modal-box">
        <i
          onClick={() => {
            props.history.goBack();
          }}
          className="fas fa-arrow-left"
        ></i>
        <span className="question">{props.questions[num].title}</span>

        <section className="chats">
          {inputChat.map(({ chats }) => {
            return (
              <div className="person">
                <span>{props.nameArr[props.nameArr.length - 1].names}</span>
                <p>{chats}</p>
              </div>
            );
          })}
        </section>
        <section className="input">
          <input
            type="text"
            placeholder="댓글쓰기"
            name="chats"
            value={chats}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <i onClick={onCreate} className="far fa-paper-plane"></i>
        </section>
      </div>
    </div>
  );
}

export default LifeModal;
