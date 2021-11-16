import "../styles/Chats.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Chats(props) {
  return (
    <div id="chats-boxs">
      {props.goods.map(({ id, nick, img, day, gps, comments }, i) => {
        return (
          <StyledLink to={`/chating/${id}`}>
            <section className="chats-box">
              <section className="profile-info" id="previews">
                <img src={props.images[i]} alt={props.images[i]} />

                <div className="chat-info">
                  <div className="meta-info">
                    <span className="nick-name">{nick}</span>
                    <span className="gps-times">
                      {gps} • {props.timeForToday(day)}
                    </span>
                  </div>
                  <div className="chat-contents">{comments}</div>
                </div>
              </section>
              <img src={img} alt={img} className="goods-image" />
            </section>
          </StyledLink>
        );
      })}
    </div>
  );
}

export default Chats;
