import { styled } from 'styled-components';

import { colors, device } from 'theme';

const Footer = ({ shuffleCards, moves, score, bestScore }) => {
  return (
    <footer>
      <ScoreWrapper>
        <p>
          <span>MOVES:</span> {moves}
        </p>
        <p>
          <span> SCORE:</span> {score}
        </p>
        <p>
          <span>BEST SCORE:</span> {bestScore}
        </p>
      </ScoreWrapper>
      <ButtonWrapper>
        <button onClick={shuffleCards}>RESTART</button>
      </ButtonWrapper>
    </footer>
  );
};

export default Footer;

const ScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  p {
    font-size: 20px;
  }
  span {
    font-weight: 600;
  }
  @media ${device.tablet} {
    p {
      font-size: 16px;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  button {
    padding: 16px 24px;
    color: ${colors.main};
    background-color: ${colors.stratos};
    border-radius: 6px;
    cursor: pointer;
  }
`;
