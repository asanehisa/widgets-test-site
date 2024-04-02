import Test from "/src/assets/svgs/test.svg";

export const SimpleJSX = () => {
  return (
    <div>
      HELLO
      <TestSvg/>
    </div>
  )
}

const TestSvg = () => {
  return (
    <img src={Test} alt="Test SVG" />      
  )
}