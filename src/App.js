/* eslint-disable */
import "./App.scss";
import { useState, useRef } from "react";
import Home from "./Components/Home";
import Life from "./Components/Life";
import Myplace from "./Components/Myplace";
import Chats from "./Components/Chats";
import Myapple from "./Components/Myapple";
import ItemInput from "./Components/ItemInput";
import Selling from "./Components/Selling";
import Chating from "./Components/Chating";
import LifeQuestion from "./Components/LifeModal";
import ProfileEdit from "./Components/ProfileEdit";
import Gps from "./Components/Gps";
import Interest from "./Components/Interest";
import Coupon from "./Components/Coupon";
import PartTime from "./Components/PartTime";
import Car from "./Components/Car";
import LifeService from "./Components/LifeService";
import Shopping from "./Components/Shopping";
import RealEstate from "./Components/RealEstate";
import Class from "./Components/Class";
import Support from "./Components/Support";
import Search from "./Components/Search";
import Category from "./Components/Category";
import Notification from "./Components/Notification";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

import { Link, Route, useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function App() {
  const timeForToday = function (value) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) return `${betweenTime}분전`;

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }
  };
  const time = new Date();
  const hours = time.getHours();
  const min = time.getMinutes();
  const history = useHistory();
  const [num, setNum] = useState(0);
  const [goods, setGoods] = useState([
    {
      id: 0,
      nick: "식은피자",
      img: "https://cold-pizza.github.io/apple-market/images/13pro.png",
      name: "아이폰 13pro",
      price: "1700000",
      gps: "제주시 연동",
      day: "2021-11-4",
      comments: "팔렸나요?",
      like: 3,
      active: false,
    },
    {
      id: 1,
      nick: "바른사람",
      img: "https://cold-pizza.github.io/apple-market/images/backpack.jpg",
      name: "f/ce travel 백팩",
      price: "290000",
      gps: "경남 김해시 내외동",
      day: "2021-11-2",
      comments: "네고 가능할까요?",
      like: 4,
      active: false,
    },
    {
      id: 2,
      nick: "챱챱",
      img: "https://cold-pizza.github.io/apple-market/images/ipad.jpg",
      name: "아이패드 5세대",
      price: "1250000",
      gps: "서울 강남구 논현동",
      day: "2021-10-31",
      comments: "구매 희망합니다",
      like: 9,
      active: false,
    },
    {
      id: 3,
      nick: "사과좋아",
      img: "https://cold-pizza.github.io/apple-market/images/macbook.jpg",
      name: "맥북 에어",
      price: "2000000",
      gps: "서울시 노원구",
      day: "2021-10-20",
      comments: "어디서 거래하나요?",
      like: 13,
      active: false,
    },
  ]);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "장유나 율하에 좋은 동물병원 있나요?",
      nickname: "쁨쁨",
      gps: "삼문동",
      time: "28분 전",
      active: false,
    },
    {
      id: 2,
      title: "아이폰8 뒷판 약간 깨진거 얼마면 괜찮나요?",
      nickname: "바른사람",
      gps: "대청동",
      time: "2시간 전",
      active: false,
    },
    {
      id: 3,
      title: "대청프라자 쪽에 타코야끼 트럭 무슨 요일에 오나요?",
      nickname: "당근당근",
      gps: "장유2동",
      time: "17시간 전",
      active: false,
    },
  ]);
  const images = [
    "https://cold-pizza.github.io/apple-market/images/iu.png",
    "https://cold-pizza.github.io/apple-market/images/yuna.jpg",
    "https://cold-pizza.github.io/apple-market/images/jobs.jpg",
    "https://cold-pizza.github.io/apple-market/images/hi.jpg",
  ];

  const [addItem, setAddItem] = useState({
    name: "",
    price: "",
    gps: "",
    img: "",
    day: "",
  });

  const { name, price, gps, img, day } = addItem;

  const onChange = (e) => {
    const { name, value } = e.target;
    setAddItem({ ...addItem, [name]: value });
  };
  const nextId = useRef(4);

  const onCreate = () => {
    const times = new Date();
    const inputUrl = document.getElementById("input-file").value;
    const item = { id: nextId.current, name, price, gps, img, day };
    item.day = times;
    item.img = inputUrl;
    setGoods([...goods, item]);
    setAddItem({ name: "", price: "", gps: "", img: "" });
    const image = document.querySelector("#preview");
    image.innerHTML = null;
    nextId.current += 1;
    setNum(num - num);
  };

  const onRemove = (id) => {
    return setGoods(
      goods.filter((list) => {
        return list.id !== id;
      })
    );
  };

  const upLoadImg = function (url) {
    const reader = new FileReader();

    reader.onload = (url) => {
      const previewImage = document.createElement("img");
      previewImage.setAttribute("src", url.target.result);
      document.querySelector("#preview").appendChild(previewImage);
    };

    reader.readAsDataURL(url.target.files[0]);

    setNum(num + 1);
  };
  const [nameArr, setNameArr] = useState([{ names: "사과맨" }]);
  const [addName, setAddName] = useState({ names: "" });
  const { names } = addName;

  const onChanges = (e) => {
    const { name, value } = e.target;
    setAddName({ ...addName, [name]: value });
  };

  const onCreates = () => {
    const item = { names };
    setNameArr([...nameArr, item]);
    setAddName({ names: "" });
    history.push("/myapple");
  };
  const [interestItem, setInterestItem] = useState([
    {
      img: "피자",
      name: "피자",
      gps: "대청동",
      day: "1일전",
      price: "1000",
    },
  ]);
  const heartClick = (id) => {
    setGoods(
      goods.map((q) => {
        return q.id === id ? { ...q, active: !q.active } : q;
      })
    );
    if (goods[id].active === false) {
      console.log("추가!");
      var arr = [...interestItem];
      arr = arr.concat(goods[id]);
      return setInterestItem(arr);
    } else {
      console.log("삭제!");

      var array = [...interestItem];
      array = array.splice(Number(array[id]), 1);
      return setInterestItem(array);
    }
  };

  const [viewImg, setViewImg] = useState({ id: 0, img: "😋" });
  const [profileImg, setProfileImg] = useState([
    {
      id: 0,
      img: "😋",
    },
    {
      id: 1,
      img: "😃",
    },
    {
      id: 2,
      img: "🐶",
    },
    {
      id: 3,
      img: "👩‍🌾",
    },
    {
      id: 4,
      img: "🍎",
    },
    {
      id: 5,
      img: "👻",
    },
  ]);
  const profileEdit = function (id) {
    var arr = [...profileImg];
    return setViewImg(arr[id]);
  };

  return (
    <div id="main">
      <div className="main-box">
        <DisplayNav hours={hours} min={min} />

        <MetaData />
        <Route exact path="/">
          <Login history={history} />
        </Route>
        <Route exact path="/signup">
          <SignUp history={history} />
        </Route>
        <Route path="/home">
          <Home
            goods={goods}
            heartClick={heartClick}
            setGoods={setGoods}
            timeForToday={timeForToday}
          />
        </Route>

        <Route path="/life">
          <Life
            history={history}
            questions={questions}
            setQuestions={setQuestions}
          />
        </Route>
        <Route path="/life/:id">
          <LifeQuestion
            questions={questions}
            history={history}
            nameArr={nameArr}
          />
        </Route>

        <Route path="/myplace">
          <Myplace />
        </Route>

        <Route path="/chats">
          <Chats
            goods={goods}
            history={history}
            timeForToday={timeForToday}
            images={images}
          />
        </Route>

        <Route path="/chating/:id">
          <Chating history={history} goods={goods} images={images} />
        </Route>

        <Route path="/myapple">
          <Myapple nameArr={nameArr} viewImg={viewImg} />
        </Route>

        <Route path="/iteminput">
          <ItemInput
            goods={goods}
            onChange={onChange}
            onCreate={onCreate}
            name={name}
            price={price}
            gps={gps}
            img={img}
            history={history}
            upLoadImg={upLoadImg}
            num={num}
            setNum={setNum}
          />
        </Route>

        <Route path="/selling">
          <Selling
            history={history}
            goods={goods}
            onRemove={onRemove}
            timeForToday={timeForToday}
          />
        </Route>

        <Route exact path="/profile-edit">
          <ProfileEdit
            viewImg={viewImg}
            profileImg={profileImg}
            profileEdit={profileEdit}
            history={history}
            nameArr={nameArr}
            onChanges={onChanges}
            onCreates={onCreates}
            names={names}
          />
        </Route>

        <Route path="/gps">
          <Gps history={history} />
        </Route>

        <Route path="/interest">
          <Interest
            goods={goods}
            history={history}
            heartClick={heartClick}
            interestItem={interestItem}
            timeForToday={timeForToday}
          />
        </Route>

        <Route path="/coupon">
          <Coupon history={history} />
        </Route>
        <Route path="/parttime">
          <PartTime history={history} />
        </Route>
        <Route path="/car">
          <Car history={history} />
        </Route>
        <Route path="/lifeservice">
          <LifeService history={history} />
        </Route>
        <Route path="/shopping">
          <Shopping history={history} />
        </Route>
        <Route path="/realestate">
          <RealEstate history={history} />
        </Route>
        <Route path="/class">
          <Class history={history} />
        </Route>
        <Route path="/support">
          <Support history={history} />
        </Route>

        <Route path="/search">
          <Search history={history} />
        </Route>
        <Route path="/category">
          <Category history={history} />
        </Route>
        <Route path="/notification">
          <Notification history={history} />
        </Route>

        <ActionNav />
      </div>
    </div>
  );
}

function DisplayNav(props) {
  return (
    <div id="nav-box">
      <section className="logo">
        <span>
          {props.hours.toString().length < 2 ? "0" + props.hours : props.hours}:
          {props.min.toString().length < 2 ? "0" + props.min : props.min}
        </span>
        <i class="fas fa-location-arrow fa-sm"></i>
      </section>
      <section className="menus">
        <i className="fas fa-signal"></i>
        <i className="fas fa-wifi"></i>
        <i className="fas fa-battery-three-quarters fa-lg"></i>
      </section>
    </div>
  );
}

function MetaData() {
  const [title, setTitle] = useState([
    {
      name: "장유2동",
      page: "/home",
    },
    {
      name: "장유2동",
      page: "/life",
    },
    {
      name: "내 근처",
      page: "/myplace",
    },
    {
      name: "채팅",
      page: "/chats",
    },
    {
      name: "나의 사과",
      page: "/myapple",
    },
  ]);
  return (
    <div id="metadata-box">
      {title.map(({ name, page }) => {
        return (
          <Route exact path={page}>
            <span className="name">{name}</span>
            <div className="icons">
              <StyledLink to="/search">
                <i class="fas fa-search"></i>
              </StyledLink>
              <StyledLink to="/category">
                <i class="fas fa-bars"></i>
              </StyledLink>
              <StyledLink to="/notification">
                <i class="far fa-bell"></i>
              </StyledLink>
            </div>
          </Route>
        );
      })}
    </div>
  );
}

function ActionNav() {
  const [site, setSite] = useState([
    {
      id: 0,
      web: "/home",
      icon: "fas fa-apple-alt",
      name: "홈",
      active: true,
    },
    {
      id: 1,
      web: "/life",
      icon: "far fa-building",
      name: "동네생활",
      active: false,
    },
    {
      id: 2,
      web: "/myplace",
      icon: "far fa-meh-blank",
      name: "내 근처",
      active: false,
    },
    {
      id: 3,
      web: "/chats",
      icon: "far fa-comment",
      name: "채팅",
      active: false,
    },
    {
      id: 4,
      web: "/myapple",
      icon: "far fa-user",
      name: "나의 사과",
      active: false,
    },
  ]);
  const colorChange = function (id) {
    setSite(
      site.map((list) => {
        if (list.id === id) {
          var arr = { ...list, active: !list.active };
          return arr;
        } else {
          return { ...list, active: false };
        }
      })
    );
  };
  return (
    <div id="action-box">
      {site.map(({ id, web, icon, name, active }) => {
        return (
          <StyledLink to={web}>
            <div
              className="action-icon"
              onClick={() => {
                colorChange(id);
              }}
              style={{ color: active ? "#ff6969" : "black" }}
            >
              <i className={icon}></i>
              <span>{name}</span>
            </div>
          </StyledLink>
        );
      })}
    </div>
  );
}
export default App;
