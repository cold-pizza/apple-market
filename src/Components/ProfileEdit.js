import "../styles/ProfileEdit.scss";
import { Link } from "react-router-dom";

import { useState } from "react";

function ProfileEdit(props) {
  return (
    <div id="profile-edit">
      <seciton className="input-edit">
        <div className="image">
          <span>{props.viewImg.img}</span>
        </div>
        <ul className="profile-list">
          {props.profileImg.map(({ img, id }) => {
            return (
              <li
                onClick={() => {
                  props.profileEdit(id);
                }}
              >
                {img}
              </li>
            );
          })}
        </ul>

        <i class="fas fa-chevron-up"></i>

        <span className="span">이모지를 선택해주세요!</span>

        <div className="names">
          <input
            type="text"
            className="input-nickName"
            name="names"
            value={props.names}
            onChange={props.onChanges}
            placeholder={props.nameArr[props.nameArr.length - 1].names}
          />
        </div>
      </seciton>

      <button onClick={props.onCreates}>수정완료</button>
      <button
        onClick={() => {
          props.history.goBack();
        }}
      >
        취소
      </button>
    </div>
  );
}

export default ProfileEdit;
