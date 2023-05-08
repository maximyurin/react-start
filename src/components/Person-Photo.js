import React from "react";

function PersonPhoto(props) {
  return (
    <div className="person-photo">
      <img src={props.image} alt="" className="user_photo" />
    </div>
  );
}

export default PersonPhoto;
