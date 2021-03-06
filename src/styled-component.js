import styled from "styled-components"

const Father = styled.div`
  display: block;
`

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: ${props => props.width};
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Button = styled.button`
  all: unset;
  padding: 10px 25px;
  color: white;
  cursor: pointer;
  background-color: ${props => props.bgColor};
  transition: all .2s ease-in-out;
`;

const Input = styled.input.attrs({ required: true, maxLength: 5 })`
  display: block;
  border: #999 3px solid;
  background-color: lemonchiffon;
`;

function StyledComponent() {
  return (
    <Father>
      <Box bgColor="teal" width="100px"></Box>
      <Box bgColor="tomato" width="200px"></Box>
      <Circle bgColor="teal" width="100px" ></Circle>
      <Button bgColor="skyblue">go to Link</Button>
      <Button as="a" bgColor="orange" href="/">go to Link</Button>
      <Input />
      <Input />
      <Input />
      <Input />
    </ Father>
  );
}

export default StyledComponent;


// ð Styled-Component
// `npm i styled-components` ì»¤ë©ë í´ì£¼ê¸°
// ìë¨ì styled ê°ì ¸ì¤ê¸° `import styled from "styled-components"`
// í¸ìë¥¼ ìí´ ìµì¤íì ì¤ì¹ `vscode-styled-components`

// ê¸°ì´ ë¬¸ë²
// const {Component-name} = styled.{Tag}`{cssë¬¸ë²ëë¡ìì±}`;

// Extending Styles ë°©ë²
// ë¤ë¥¸ ì»´í¬ëí¸ì ì¤íì¼ì ììíë ì ì»´í¬ëí¸ë¥¼ ì½ê² ë§ë¤ë ¤ë©´
// styled() ìì±ìì êµ¬ì±íë©´ ëë¤.

// as
// asë¥¼ ì¬ì©íì¬ ìë¦¬ë¨¼í¸ë¥¼ ë¤ë¥¸ ìë¦¬ë¨¼í¸ë¡ êµì²´ë¥¼ í  ì ìë¤.
// <Button as="a">

// Attaching additional props
// styled component ìì± ì .attrs({})ì ë¶ì¬ì
// ì¤ê´í¸ ì¬ì´ì ìì±ê°ì ë£ì ì ìë¤. 