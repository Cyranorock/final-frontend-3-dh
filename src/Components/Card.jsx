import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

const Card = ({ data }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return ( 
    <Link to={`/detail/${data.id}`}><div className="card">
        <h3>{data.name}</h3>
        <p>{data.username}</p>
        <p>{data.id}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div></Link>
  );
};

export default Card;
