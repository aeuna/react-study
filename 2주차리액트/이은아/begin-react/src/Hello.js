import React from "react";

const Hello = ({ color, name }) => {
  return <div style={{ color }}>안녕하세용 {name}</div>;
};

Hello.defaultProps = {
  name: "이름 없음",
};

export default Hello;
