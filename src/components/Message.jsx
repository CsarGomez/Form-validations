import React from "react";

const Message = ({ msg, color }) => {
  return <p className={color}>{msg}</p>;
};

export default Message;
