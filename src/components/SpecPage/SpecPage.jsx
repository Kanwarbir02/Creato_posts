import React, { useEffect, useState } from 'react'

import { fetchSpecific } from '../../api/fetchapi';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

const SpecPage = () => {

    const [specData, setSpecData] = useState(null);
    const [hasLoaded, setHasLoaded] = useState(false);

    // let {tid} = useParams();
    let tid = useParams();
    

    useEffect(() => {
        fetchSpecific(tid.id)
            .then((result) => {
                setSpecData(result);
                
            })
            .catch((error) => {
                console.log(error)
            })  

        if(specData){
            setHasLoaded(true);
        }    
    }, [specData])

    // console.log(specData);
    // console.log(hasLoaded);

    if(specData == null){

        return(
                <h1>Loading....</h1>
            )


    }
    

    
        return (
            <div>
                { hasLoaded && 
                    
                    <Card>
                    <Card.Header>Article {specData[0].id}</Card.Header>
                    <Card.Body>
                        <Card.Title>{specData[0].title}</Card.Title>
                        <Card.Text>
                        {specData[0].body}
                        </Card.Text>
                        
                       
                    </Card.Body>
                    </Card>

                    

                }

                
            </div>
    )
    

    
  
}

export default SpecPage