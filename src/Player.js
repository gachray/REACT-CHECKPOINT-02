
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Player = ({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown Nationality",
  jerseyNumber = 0,
  age = 0,
  imageUrl = "https://via.placeholder.com/200"
}) => {
  const isMbappe = name === "Kylian Mbappé";
  const imageSize = isMbappe ? { width: '100%', height: '90%' } : {};

  return (
    <Card style={{ width: '18rem', margin: '10px', backgroundColor: '#F8E231', border: '1px solid #964B00', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
      <Card.Img variant="top" src={imageUrl} style={imageSize} />
      <Card.Body>
        <Card.Title style={{ color: '#964B00' }}>{name}</Card.Title>
        <Card.Text style={{ color: '#964B00' }}>
          Team: {team}
        </Card.Text>
        <Card.Text style={{ color: '#964B00' }}>
          Nationality: {nationality}
        </Card.Text>
        <Card.Text style={{ color: '#964B00' }}>
          Jersey Number: {jerseyNumber}
        </Card.Text>
        <Card.Text style={{ color: '#964B00' }}>
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;