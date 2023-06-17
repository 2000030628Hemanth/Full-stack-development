import React from 'react'

export default function Product() {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{this.props.Title}</Card.Title>
            <Card.Text>
              {props.desc}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
}
