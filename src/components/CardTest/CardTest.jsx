import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CardTest.css'


export default function CardTest({ resource }) {
    return (
                <Card className="margin" id="force" style={{ width: '30%' }}>
                    <Card.Body className="borderbig">
                        <Card.Title>{resource.name}</Card.Title>
                        <Card.Text>
                            {resource.tag}
                        </Card.Text>
                        <Card.Text>
                            {resource.description.slice(0, 125)}
                        </Card.Text>
                        <Link to={`/resources/${resource._id}`}><Button variant="primary">Details</Button></Link>
                    </Card.Body>
                </Card>
    )
}