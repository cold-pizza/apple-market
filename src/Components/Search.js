import "../styles/Search.scss";
import { useState, useRef } from "react";

function Search(props) {
  const [list, setList] = useState([
    {
      name: "아이폰",
      active: true,
    },
    {
      name: "아이패드",
      active: true,
    },
    {
      name: "맥북",
      active: true,
    },
    {
      name: "백팩",
      active: true,
    },
    {
      name: "애플워치",
      active: true,
    },
    {
      name: "아이맥",
    },
    {
      name: "z플립",
    },
  ]);

  const [test, setTest] = useState("");

  const onChange = (e) => {
    setTest(e.target.value);
    // names 안에 value가 있다면 active -> true, 없으면 false.
    // list 안에 value가 있다면 그대로, 없다면 list[i].active -> !active.
  };

  return (
    <div id="search">
      <section className="input-form">
        <i
          class="fas fa-arrow-left"
          onClick={() => {
            props.history.goBack();
          }}
        ></i>
        <input
          type="text"
          value={test}
          onChange={onChange}
          placeholder="'장유2동' 근처에서 검색"
        />
        <i class="fas fa-search"></i>
      </section>

      <section className="item-box">
        {list
          .filter((val) => {
            if (test === "") {
              return val;
            } else if (val.name.includes(test)) {
              return val;
            }
          })
          .map(({ name }) => {
            return (
              <div className="item">
                <i class="fas fa-search"></i>
                <span className="name">{name}</span>
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default Search;
