import { createContext, useState, useEffect } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [dentist, setDentist] = useState();

  const getDentist = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDentist(data[0])
  }

  useEffect(() => {
    getDentist();
  })

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};
