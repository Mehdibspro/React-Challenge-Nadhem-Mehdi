import React from 'react';
import {Card} from 'react-bootstrap';
const Movie = (props) => {
    return (
        <div>
         <Card>
    <Card.Img variant="top" src={props.image} style={{width:"200px" }} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
        {props.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{props.rating}</small>
    </Card.Footer>
  </Card>   
        </div>
    )
}

export default Movie
