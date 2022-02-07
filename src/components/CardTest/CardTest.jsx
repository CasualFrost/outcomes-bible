import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}