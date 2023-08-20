import { styled } from 'styled-components';

import { device } from 'theme';

const Header = () => {
  return (
    <Wrapper>
      <h1>Play The Flip Card Game</h1>
      <p>Select to cards with same content consequtively to make them vanish</p>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  margin: 0 auto;
  text-align: center;
  p {
    font-size: 24px;
    margin-top: 24px;
  }
  @media ${device.tablet} {
    p {
      font-size: 18px;
      margin-top: 18px;
    }
    h1 {
      font-size: 28px;
    }
  }
`;
