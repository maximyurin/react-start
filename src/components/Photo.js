import React from "react";

function Photo(props) {
  return <img src={props.imgPath} alt="" className="user_photo" />;
}

export default Photo;
