import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


export default function CardTest({ resource }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{resource.name}</Card.Title>
                <Card.Text>
                    {resource.tag}
                </Card.Text>
                <Card.Text>
                    {resource.description.slice(0, 100)}
                </Card.Text>
                <Link to={`/resources/${resource._id}`}><Button variant="primary">Details</Button></Link>
            </Card.Body>
        </Card>
    )
}