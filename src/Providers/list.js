import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ListContext = createContext([]);

export const ListProvider = ({ children }) => {
  const [beerList, setBeerList] = useState([]);

  const getBeerList = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setBeerList(response.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getBeerList();
  }, []);

  return (
    <ListContext.Provider value={{ beerList, getBeerList }}>
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => useContext(ListContext);
