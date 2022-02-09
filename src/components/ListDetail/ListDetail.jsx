import { useState, useEffect } from 'react';
import * as listAPI from '../../utilities/lists-api';
import CardTest from '../../components/CardTest/CardTest'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./ListDetail.css";
import {Link} from 'react-router-dom';


export default function ListDetail({ list }) {
    return (
        <>
            <Container className="border" style={{ width: '200rem' }}>
                <Row>
                    <Col className="border">{list.name}</Col>
                </Row>
                <Row>
                    {list.resources.map(r =>
                        <Card style={{ width: '33.3%' }}>
                            <Card.Body>
                                <Card.Title>{r.name}</Card.Title>
                                <Card.Text>
                                    {r.tag}
                                </Card.Text>
                                <Card.Text>
                                    {r.description.slice(0, 125)}
                                </Card.Text>
                                <Link to={`/resources/${r._id}`}><Button variant="primary">Details</Button></Link>
                            </Card.Body>
                        </Card>
                    )}
                </Row>
            </Container>
        </>

    );
}