import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import * as resourcesApi from '../../utilities/resources-api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function ResourceDetailPage() {
    const [resource, setResource] = useState({})
    const {id} = useParams();
    console.log(id);

    useEffect(function() {
        async function fetchResource() {
            const res = await resourcesApi.getById(id)
            console.log(res);
            setResource(res);
        }
        fetchResource();
    }, []);
    return (
        <>
                <br></br>
            <Container className="border" style={{ width: '200rem' }}>
                <Row>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>{resource.name}</Card.Title>
                                <Card.Text>
                                    {resource.tag}
                                </Card.Text>
                                <Card.Text>
                                    {resource.url}
                                </Card.Text>
                                <Card.Text>
                                    {resource.description}
                                </Card.Text>
                                <Button variant="primary">Add to List</Button>
                            </Card.Body>
                        </Card>
                </Row>
            </Container>
        </>
    )
}