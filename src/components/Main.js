import React, { useEffect, useReducer } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import dataReducer from "../reducers/data";
import DataContext from "../context/data-context";
import { pymSendHeight } from "../utils/handlePym";

const Main = (props) => {
  const [data, dispatch] = useReducer(dataReducer, []);
  const loadedData = props.data

  useEffect(() => {
    pymSendHeight({ timeout: 500 });
    dispatch({ type: "POPULATE_DATA", loadedData });
  }, []);

  return (
    <div className="container__outer">
      <div className="container__inner">
        <DataContext.Provider value={{ data }}>
          <Header />
          <Body  />
          <Footer />
        </DataContext.Provider>
      </div>
    </div>
  );
};

export default Main;
