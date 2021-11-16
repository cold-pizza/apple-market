import "../styles/SignUp.scss";
import axios from "axios";
import { useState } from "react";

function SignUp(props) {
  const [sign, setSign] = useState({ id: "", password: "" });
  const { id, password } = sign;
  const onChange = (e) => {
    const { name, value } = e.target;
    setSign({ ...sign, [name]: value });
    console.log(e.target.value);
  };
  const onSubmit = async (id, password) => {
    axios
      .post("http://localhost:8000/users", { id, password })
      .then(() => {
        if (sign === null) {
          alert("아이디 또는 비밀번호를 입력해주세요");
        } else {
          console.log("성공!");
          setSign({ id: "", password: "" });
          props.history.replace("/");
        }
      })
      .catch(() => {
        console.log("실패!");
      });
  };

  return (
    <div id="sign-up">
      <h1>⭐️회원가입⭐️</h1>
      <div className="sign-up-form">
        <input
          value={id}
          name="id"
          type="text"
          placeholder="아이디"
          onChange={onChange}
        />
        <input
          value={password}
          name="password"
          type="text"
          placeholder="비밀번호"
          onChange={onChange}
        />
        <button
          onClick={() => {
            onSubmit(id, password);
          }}
        >
          완료!
        </button>
        <button
          onClick={() => {
            props.history.goBack();
          }}
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
}

export default SignUp;
