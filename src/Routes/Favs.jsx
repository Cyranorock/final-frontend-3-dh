import React from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state , dispatch} = useContext(ContextGlobal);


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      <div className="container">
        <button className="clear-button" onClick={() => dispatch({type:'REMOVE_ALL_DENTIST'})}>Delete All</button>
      </div>
        {state.favDentists 
        ? state.favDentists.map((s)  => (
          <Card key={s.id} name={s.name} username={s.username} id={s.id}/>
        ))
        : null
        }
      </div>
    </>
  );
};

export default Favs;
