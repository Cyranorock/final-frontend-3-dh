import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState();
  const param = useParams();
  const getDentist = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${param.id}`);
    const data = await res.json();
    setDentist(data)
  }

  useEffect(() => {
    getDentist()
  }, [])


  return dentist
        ? (<>
          <h1>Detail Dentist {dentist.id} </h1>
          <div className='card'>
            <h1>{dentist.name}</h1>
            <p>{dentist.email}</p>
            <p>{dentist.phone}</p>
          </div> 
          <Card key={dentist.id} data={dentist}/></>)
        : null
    
  
        }

export default Detail