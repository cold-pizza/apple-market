import { useState } from "react";
import "../styles/Gps.scss";

function Gps(props) {
  const [isBtn, setIsBtn] = useState(false);
  const { kakao } = window;
  const location = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const myPosition = () => {
        setIsBtn(!isBtn);
        var container = document.querySelector(".map");
        var options = {
          center: new kakao.maps.LatLng(lat, long),
          level: 3,
        };
        var map = new kakao.maps.Map(container, options);
        var markerPosition = new kakao.maps.LatLng(lat, long);
        var marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      };
      myPosition();
    });
  };
  return (
    <div id="gps-box">
      <h1>동네인증하기</h1>
      <button onClick={location} className="current-loaction-btn">
        현재위치알기
      </button>
      <span className="current-loaction">현재위치 : </span>
      <div className="map"></div>
      <button
        onClick={() => {
          props.history.goBack();
        }}
        className="done-btn"
      >
        완료!
      </button>
    </div>
  );
}

export default Gps;
