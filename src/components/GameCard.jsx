import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from './styles';

export default function GameCard(props) {
  const { id, title, platform, genre: category, thumbnail: image } = props;
  const history = useHistory();
  return (
    <Card
      onClick={() => {
        history.push(`/game/${id}`);
      }}
    >
      <img src={image} alt="" />
      <h3 className="title">{title}</h3>
      <p className="info">
        {platform} - {category}
      </p>
    </Card>
  );
}
