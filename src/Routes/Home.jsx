import { getDefaultNormalizer } from '@testing-library/react'
import { wait } from '@testing-library/user-event/dist/utils'
import { ContextGlobal } from "../Components/utils/global.context";
import React, { useState, useEffect, useContext } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {dentists} = useContext(ContextGlobal)




  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.length 
          ? dentists.map(dentist => (<Card key={dentist.id} data={dentist}/>))
          : null}
      </div>
    </main>
  )
}

export default Home