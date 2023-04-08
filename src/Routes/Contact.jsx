import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>¿Quieres saber más?</h2>
      <p>Dejanos tus datos para que te enviemos toda la info</p>
      <Form/>
    </div>
  )
}

export default Contact