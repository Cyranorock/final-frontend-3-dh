import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ data }) => {

  const {state , dispatch} = useContext(ContextGlobal);
  
  const addFav = (dentist) => {
    dispatch({type:"ADD_DENTIST_FAV" , dentist})
    alert(`Se añadio a ${data.name} a tus favoritos`)
  }

  return ( 
    <Link to={`/detail/${data.id}`}><div className="card">
        <h3>{data.name}</h3>
        <p>{data.username}</p>
        <p>{data.id}</p>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div></Link>
  );
};

export default Card;
