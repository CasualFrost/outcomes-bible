import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as resourcesApi from '../../utilities/resources-api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import * as listsApi from "../../utilities/lists-api"

export default function ResourceDetailPage() {
    const [lists, setLists] = useState([])
    const [resource, setResource] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(function () {
        async function fetchResource() {
            const res = await resourcesApi.getById(id)
            const lists = await listsApi.getLists()
            setLists(lists);
            setResource(res);
        }
        fetchResource();
    }, []);

    const listOptions = lists.map(function (l) {
        return <option value={l._id} key={l._id}>{l.name}</option>
    })

    async function handleSubmit(evt) {
        evt.preventDefault()
        const listId = evt.target.querySelector('select').value
        await listsApi.addToList(listId, resource._id)
        navigate('/lists')
    }

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
                            Website Link: <a href={resource.url} target="_blank">{resource.url}</a>
                            </Card.Text>
                            <Card.Text>
                                {resource.description}
                            </Card.Text>
                            {
                                lists.length ?
                                    <form onSubmit={handleSubmit} style={{}}>
                                        <select>
                                            {listOptions}
                                        </select>
                                        <button style={{width: '30%' }}>Add to the list</button>
                                    </form>
                                    :
                                    <h3> No List Yet </h3>
                            }
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}