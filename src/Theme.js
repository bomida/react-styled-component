import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.backgroundColor};
`;

const Title = styled.h1`
  font-size: 80px;
  color: ${props => props.theme.textColor};
`

function Theme() {
  return (
    <Wrapper>
      <Title>Empty</Title>
    </Wrapper>
  );
}

export default Theme;


// π Themes

// styled componentλ <ThemeProvider> μ»΄ν¬λνΈλ₯Ό ν΅ν΄ μ μ²΄ νλ§λ₯Ό μ§μνλ€.
// μ΄ μ»΄ν¬λνΈλ μ»¨νμ€νΈ APIλ₯Ό ν΅ν΄ μμ²΄ μλμ μλ λͺ¨λ  React κ΅¬μ± μμμ νλ§λ₯Ό μ κ³΅νλ€.
// λ λ νΈλ¦¬μμ λͺ¨λ  μ€νμΌ κ΅¬μ± μμλ μ¬λ¬ μμ€μ κΉμ΄μ μλ κ²½μ°μλ μ κ³΅λ νλ§μ μμΈμ€ν  μ μλ€.

// <ThemeProvider theme={...}>
//   <Components>
// </ThemeProvider>