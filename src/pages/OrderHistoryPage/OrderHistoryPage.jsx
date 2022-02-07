// import { checkToken } from '../../utilities/users-service';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import * as resourceAPI from '../../utilities/get-resource';
import CardTest from '../../components/CardTest/CardTest'


export default function OrderHistoryPage() {

  // async function handleCheckToken() {
  //   const expDate = await checkToken();
  //   console.log(expDate);
  // }

  const [resource, setResource] = useState([]);
  useEffect(function() {
    async function getManyResources() {
      const Res = await resourceAPI.getResources()
      console.log('Test', Res)
      setResource(Res)
    }
    getManyResources();
  }, []);
  console.log(resource)

  return (
    <>
      <h1>Ayo</h1>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        {resource.map((r) => 
        <CardTest resource={r}/>
        )}
        <Card.Title>Card</Card.Title>
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