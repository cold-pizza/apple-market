import React from "react";
import "../styles/Life.scss";
import { Link } from "react-router-dom";

function Life(props) {
  const onToggle = (id) => {
    props.setQuestions(
      props.questions.map((q) => {
        return q.id === id ? { ...q, active: !q.active } : q;
      })
    );
  };

  return (
    <div id="hometown-box">
      {props.questions.map(({ id, title, nickname, gps, time, active }) => {
        return (
          <section className="hometown-box">
            <section className="hashtag">
              <p>우리동네질문</p>
            </section>
            <section className="question">
              <span>Q.</span>
              <span>{title}</span>
            </section>
            <section className="meta-info">
              <span>
                {nickname} • {gps}
              </span>
              <span>{time}</span>
            </section>
            <footer className="footer">
              <button
                onClick={() => {
                  onToggle(id);
                }}
                style={{ color: active ? "#ff6969" : "black" }}
                className="good-btn"
              >
                <i class="far fa-smile"></i>
                <span>공감하기</span>
              </button>
              <Link to={`/life/${id}`}>
                <button className="chat-btn">
                  <i class="far fa-comment"></i>
                  <span>답변하기</span>
                </button>
              </Link>
            </footer>
          </section>
        );
      })}
    </div>
  );
}

export default Life;
