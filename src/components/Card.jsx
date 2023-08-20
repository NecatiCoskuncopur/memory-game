import { styled } from 'styled-components';

import { device } from 'theme';

const Card = ({ item, handleChoice, flipped }) => {
  return (
    <>
      {flipped ? (
        <Wrapper matched={item.matched}>
          <img
            src={item.src}
            alt="card front"
          />
        </Wrapper>
      ) : (
        <Wrapper onClick={() => handleChoice(item)}>
          <img
            src="/images/cover.png"
            alt="card back"
          />
        </Wrapper>
      )}
    </>
  );
};

export default Card;

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 50px #ccc;
  border-radius: 20px;
  position: relative;
  img {
    height: 100px;
    object-fit: contain;
  }
  ${({ matched }) => matched && `opacity: 0.5`};

  @media ${device.laptop} {
    img {
      height: 80px;
    }
  }
  @media ${device.tablet} {
    img {
      height: 60px;
    }
  }
  @media ${device.phone} {
    img {
      height: 40px;
    }
  }
`;
