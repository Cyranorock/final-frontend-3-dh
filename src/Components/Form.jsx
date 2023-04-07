import React, { useState } from "react";

const validateUserName = (userName) => {
  const noSpaces= userName.trim();
  const userNameAsArray = userName.split("")
  if(noSpaces.length >=3 && userNameAsArray[0] !== " ") {
      return true;
  } else {
      return false;
  }
}

const validateUserEmail = (userName) => {
  const noSpaces= userName.trim();
  if(noSpaces.length >=6) {
      return true;
  } else {
      return false;
  }
}

const Form = () => {
  const [userName, setUserName] = useState("")
  const [formComplete, setFormComplete] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [message, setMessage] = useState("")

  const onChangeUserName = (e) => {
      setFormComplete(false);

      setUserName(e.target.value);

  }   
  const onChangeUserEmail = (e) => {
      setFormComplete(false);

      setUserEmail(e.target.value)
  }

  const onSubmitForm = (e) => {
      e.preventDefault();
      
      const isUsernameValid = validateUserName(userName)
      const isEmailValid = validateUserEmail(userEmail)
      if(isUsernameValid && isEmailValid) {
          setFormComplete(true);
      } else {
          setFormComplete(false);
          alert("Por favor chequea que la información sea correcta");
      }
      
      };
  return (
    <div className="App">
    <h3>Por favor completar</h3>
    <form onSubmit={onSubmitForm}>
        <div><input type="text" placeholder="Nombre de usuario" value={userName} onChange={onChangeUserName}/></div>
        <div><input type="text" placeholder="Email" value={userEmail} onChange={onChangeUserEmail}/></div>
        <button type="submit">Enviar</button>    
    </form>

    {formComplete ? <Card userName={userName} banda={userEmail} /> : null}
</div>
  );
};

export default Form;
