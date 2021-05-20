import React from "react";

const Hello = ({ color, name, isSpecial }) => {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      안녕하세용 {name}
    </div>
  );
};

Hello.defaultProps = {
  name: "이름 없음",
};

export default Hello;
