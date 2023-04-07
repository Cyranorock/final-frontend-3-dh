import { getDefaultNormalizer } from '@testing-library/react'
import { wait } from '@testing-library/user-event/dist/utils'
import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([])

  const getDentists = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDentists(data)
  }

  useEffect(() => {
    getDentists();
  })

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.length 
          ? dentists.map(dentist => (<Card data={dentist}/>))
          : null}
      </div>
    </main>
  )
}

export default Home