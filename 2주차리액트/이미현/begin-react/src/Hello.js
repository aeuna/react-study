import React from 'react';

const Hello = ({ color, name, isSpecial }) => {
  return (
    <div style={{ color }}>
      {/* JSX에서 null, false, undef를 렌더링할 경우 암것도 안보이게됨 */}
      {isSpecial && <b>*</b>}
      안녕하세요, {name}
    </div>
  );
};

Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;
