import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = ({ data }) => {
  if (data) {
    const {
      image,

      title,
      director,
      actor,
      userRating,
      pubDate,
      link
    } = data;

    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} alt="이미지를 표시할 수 없습니다" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Card.Text>
            {director}
            <br /> {actor}
            {pubDate}
          </Card.Text>
          <Card.Link href={link}>Click</Card.Link>
        </Card.Body>
        <Card.Footer className="text-muted">{userRating}</Card.Footer>
      </Card>
    );
  } else return <></>;
};

export default MovieCard;
