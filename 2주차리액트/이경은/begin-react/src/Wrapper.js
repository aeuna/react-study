//1. 컴포넌트 태그 사이에 넣은 값을 조회 하고 싶을 때는
//   props.children을 활용해라

function Wrapper({children}) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
        {/* props.children 렌더링 */}
        {children}
    </div>
  )
}

export default Wrapper;