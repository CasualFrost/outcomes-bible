import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

export default function ResourceDetailPage() {
    const [resource, setResource] = useState({})
    const {id} = useParams();
    console.log(id);

    useEffect(function() {
        async function fetchResource() {
            
        }
        fetchResource();
    }, []);
    return (
        <div>
            Resource Detail Page
        </div>
    )
}