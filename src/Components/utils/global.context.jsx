import { createContext, useState, useEffect, useReducer  } from "react";

export const initialState = {
  theme: localStorage.getItem('theme'), 
  fav: []
}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_DENTIST_FAV': {
        const existsDentist = state.favDentists.find((dentist) => dentist.id === action.dentist.id);
        if (existsDentist) {
          return state;
        }
        const newFavDentists = [...state.favDentists, action.dentist];
        saveFavFromStorage(newFavDentists)
        return { ...state, favDentists: newFavDentists };
      }
      case 'LOAD_DENTISTS_FAV': {
        return { ...state, favDentists: getFavFromStorage() };
      }
      case 'REMOVE_DENTIST': {
        const newFavDentists = state.favDentists.filter((dentist) => dentist.id !== action.dentist.id);
        saveFavFromStorage(newFavDentists);
        return { ...state, favDentists: newFavDentists };
      }
      case 'REMOVE_ALL_DENTIST': {
        localStorage.removeItem("favs");
        return { ...state, favDentists: [] };
      }
      case 'CHANGE_THEME': {
        localStorage.setItem('tema', action.theme);
        return { ...state, theme: action.theme };
      }
      default:
        return state;
    }
  };

  const getFavFromStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
  };

  const saveFavFromStorage = (fav) => {
    localStorage.setItem("favs", JSON.stringify(fav));
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [dentists, setDentists] = useState([])

  const getDentists = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDentists(data)
  }

  useEffect(() => {
    getDentists();
    dispatch({ type: "LOAD_DENTISTS_FAV" });
  }, [])

  return (
    <ContextGlobal.Provider value={{ dentists, state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
