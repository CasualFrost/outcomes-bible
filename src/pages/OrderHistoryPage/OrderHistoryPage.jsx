import React from 'react';
import { checkToken } from '../../utilities/users-service';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function OrderHistoryPage() {

  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }

  return (
    <>
      <h1>Ayo</h1>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </>
  );
}