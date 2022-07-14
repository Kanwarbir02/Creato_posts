import React, { useEffect, useState } from 'react'

import { fetchSpecific } from '../../api/fetchapi';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

const SpecPage = () => {

    const [specData, setSpecData] = useState([]);

    // let {id} = useParams();

    // let id = 4;

    useEffect(() => {
        fetchSpecific()
            .then((result) => {
                setSpecData(result);
                
            })
            .catch((error) => {
                console.log(error)
            })  
    }, [])

    console.log(specData[0]);

    if(specData) {
        return (
            <div>
                <Card>
                    <Card.Header>Article{specData[0].id}</Card.Header>
                    <Card.Body>
                        <Card.Title>{specData[0].title}</Card.Title>
                        <Card.Text>
                        {specData[0].body}
                        </Card.Text>
                        
                       
                    </Card.Body>
                    </Card>
            </div>
    )
    }

    return (
        <div>Pending...</div>
    )
  
}

export default SpecPage