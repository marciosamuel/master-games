import React, { useState } from 'react';
import { Card } from './styles';
import FilledStar from '../assets/FilledStar.svg';
import EmptyStar from '../assets/EmptyStar.svg';

function GameCard(props) {
  const { title, platform, genre: category, thumbnail: image } = props;
  const [rate, setRate] = useState(0);
  return (
    <Card>
      <h3 className="title">{title}</h3>
      <p className="info">
        Plataforma: {platform}
        <br />
        Categoria: {category}
      </p>
      <img src={image} />
      <span className="rating">
        {[...Array(5)].map((item, index) => (
          <img
            key={index}
            src={index < rate ? FilledStar : EmptyStar}
            onClick={() => setRate(index + 1)}
          />
        ))}
      </span>
      {rate > 0 && (
        <small
          className="clear-rate"
          onClick={() => {
            setRate(0);
          }}
        >
          Limpar avaliação
        </small>
      )}
    </Card>
  );
}

export default GameCard;
