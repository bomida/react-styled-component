import styled, { keyframes } from "styled-components"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotatingAni = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0%;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 50%;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0%;
  }
`;

const Emoji = styled.span`
    font-size: 40px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blueviolet;
  animation: ${rotatingAni} 2s linear infinite;
  ${Emoji}:hover {
    font-size: 80px;
  }
`;

function Animations() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">๐ป</Emoji>
      </Box>
    </Wrapper>
  );
}

export default Animations;


// ๐ Animations

// ์คํ์ผ ์ปดํฌ๋ํธ์์๋ keyframes helper๋ฅผ ์ฌ์ฉํด
// ์ฑ ์ ์ฒด์์ ์ฌ์ฉํ  ์ ์๋ ๊ณ ์ ํ ์ธ์คํด์ค๋ฅผ ์์ฑํ๋ค.
// class ์ด๋ฆ์ฒ๋ผ animation์ด๋ฆ๋ ์์ ๋กญ๊ฒ ์์ฑํ  ์ ์๋ค.

// hover
// ํธ์๋ฅผ ์ํด styled component์์ &:hover{..}๋ฅผ ์์ฑํด์ค๋ค.
// ๊ธฐ์กด css์ฒ๋ผ styled component ๋ฐ๊นฅ์ tag:hover{...}์ ์์ฑํ  ์๋ ์๋ค.

// Component์์ ์ผ๋ฐ ํ๊ทธ์ ๋ํ ์คํ์ผ๋ง
// styled component์์ tag{...}๋ฅผ ์์ฑํด์ค๋ค.

// ๋ง์ฝ as๋ก ํ๊ทธ ๋ณ๊ฒฝ ๊ฐ๋ฅ์ฑ์ด ์๊ฑฐ๋ํ๋ ํ๊ทธ ์์กด์ฑ์์ ๋ฒ์ด๋๊ณ  ์ถ๋ค๋ฉด
// style component๋ฅผ ์์ฑํ ๋ค ํ๊ทธ ๋์ 
// ${style component name} {...}์ ์์ฑํด์ค๋ค.