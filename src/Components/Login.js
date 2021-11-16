import "../styles/Login.scss";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Login(props) {
  const axiosLogin = async ({ id, password }) => {
    const db = await axios.get("http://localhost:8000/users");
    //   .then((result) => {
    //     const users = result.data;
    //     console.log(users);
    //     const user = users.find((user) => user.id === id);
    //     if (!user || user.password !== password) {
    //       throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
    //     }
    //   })
    //   .catch(() => {
    //     console.log("실패햇어요");
    //   });
    if (db) {
      const users = await db.data;

      const user = users.find((user) => user.id === id);
      if (!user || user.password !== password) {
        throw new Error("아이디 또는 비밀번호가 다릅니다.");
      }
      return user;
    } else {
      throw new Error("서버 통신이 원할하지 않습니다.");
    }
  };

  const [account, setAccount] = useState({ id: "", password: "" });
  const { id, password } = account;

  const onChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
    console.log(e.target.value);
  };

  const onSubmit = async (account) => {
    try {
      const test = await axiosLogin(account);
      props.history.replace("/home");
      console.log("로그인성공!");
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <div id="login">
      <h1>사과마켓에 오신걸 환영합니다!</h1>
      <input
        className="id-input"
        id="id"
        value={id}
        name="id"
        type="text"
        placeholder="ID"
        onChange={onChange}
      />
      <input
        id="password"
        value={password}
        name="password"
        className="password-input"
        type="password"
        placeholder="password"
        onChange={onChange}
      />
      <button
        onClick={() => {
          onSubmit(account);
        }}
        className="login-btn"
      >
        로그인
      </button>
      <StyledLink to="/signup">
        <button className="sign-up-btn">회원가입</button>
      </StyledLink>
    </div>
  );
}

export default Login;
