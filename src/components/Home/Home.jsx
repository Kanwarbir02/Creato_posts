import React, { useEffect, useState } from 'react'
import { fecthData, fetchSpecific } from '../../api/fetchapi';
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const Home = () => {

    

    const [newData, setNewData] = useState([]);
    

    useEffect(() => {

        fecthData()
            .then((results) => {
                setNewData(results);
                
            })
            .catch((error) => {
                console.log(error);
            })
        
              
            
    }, [])

    console.log(newData);

    const handleClick = (id) => {
        let a =0;
    }

    // console.log(specData)


    const dataList = newData.map((data) => 
        <div key={data.id}>
            <Card>
            <Card.Header>Article{data.id}</Card.Header>
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                {data.body}
                </Card.Text>
                <Link to={`/${data.id}`}>
                    <Button variant="primary">Go to Article {data.id}</Button>
                </Link>
                
            </Card.Body>
            </Card>
        </div>
    )

  return (
    <div>
        {/* {JSON.stringify(newData[1].id)} */}
        
        {dataList}
    </div>
  )
}

export default Home