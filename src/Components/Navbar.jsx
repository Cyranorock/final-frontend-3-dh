import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch} = useContext(ContextGlobal)

  const cambiarTema = (theme) => {
    dispatch({ type: 'CAMBIAR_TEMA', theme });
  };

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/favs'>Favoritos</Link></li>
        <li><Link to='/contacto'>Contacto</Link></li>
      </ul>
      <button onClick={() => cambiarTema(!state.theme)}>{state.theme ? 'Night':'Day'}</button>
    </nav>
  )
}

export default Navbar