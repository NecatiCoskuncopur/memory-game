import { useState, useEffect } from 'react';

import { Cards, Footer, Header } from 'components';
import { styled } from 'styled-components';

const cardImages = [
  { src: '/images/bulbasaur.png', matched: false },
  { src: '/images/butterfree.png', matched: false },
  { src: '/images/charmander.png', matched: false },
  { src: '/images/gengar.png', matched: false },
  { src: '/images/pikachu.png', matched: false },
  { src: '/images/squirtle.png', matched: false },
];

const App = () => {
  const [cards, setCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [bestScore, setBestScore] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setMoves(0);
    setScore(0);
    const savedScore = JSON.parse(localStorage.getItem('score'));
    if (savedScore) {
      setBestScore(savedScore);
    }
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const filteredCards = cards.filter((item) => item.matched);

  useEffect(() => {
    if (filteredCards.length === cards.length && cards.length > 0) {
      setIsFinish(true);
    }
  }, [filteredCards]);

  useEffect(() => {
    if (isFinish && score > bestScore) {
      localStorage.setItem('score', JSON.stringify(score));
    }
  }, [isFinish, bestScore, score]);

  return (
    <Container>
      <Header />
      <Cards
        data={cards}
        setCards={setCards}
        setMoves={setMoves}
        setScore={setScore}
      />
      <Footer
        shuffleCards={shuffleCards}
        moves={moves}
        score={score}
        bestScore={bestScore}
      />
    </Container>
  );
};

export default App;

const Container = styled.main`
  padding: 0 16px;
  margin: 50px 0;
`;
