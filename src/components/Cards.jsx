import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { device } from 'theme';
import Card from './Card';

const Cards = ({ data, setCards, setMoves, setScore }) => {
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const handleChoice = (card) => {
    if (!disabled) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          })
        );
        resetTurn();
        setScore((prevScore) => prevScore + 5);
      } else {
        setTimeout(() => resetTurn(), 1000);
        setScore((prevScore) => prevScore - 1);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setMoves((prevMoves) => prevMoves + 1);
    setDisabled(false);
  };

  return (
    <Wrapper>
      {data.map((item) => (
        <Card
          key={item.id}
          item={item}
          handleChoice={handleChoice}
          flipped={item === choiceOne || item === choiceTwo || item.matched}
        />
      ))}
    </Wrapper>
  );
};

export default Cards;

const Wrapper = styled.section`
  margin: 40px auto;
  width: 60%;
  height: calc(100vh - 358px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  gap: 20px;
  padding: 16px;
  @media ${device.laptop} {
    width: 80%;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;
