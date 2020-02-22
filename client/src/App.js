import React, { useReducer } from "react";
import axios from "axios";
import reducer from "./hooks/reducer";

import { Search, Header, Result } from "./component";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./asset/style/globalstyle";
import defaultTheme from "./asset/style/themes/default";

export const InputDispatch = React.createContext(null);

export const MovieDispatch = React.createContext(null);

const App = () => {
  const [input, dispatch] = useReducer(reducer, "");

  const [list, listdispatch] = useReducer(reducer, []);

  const handleChange = e => {
    const { name, value } = e.target;

    dispatch({
      type: "CHANGE_VALUE",
      name,
      value
    });
  };

  const handleMovieList = value => {
    listdispatch({
      type: "CHANGE_LIST",
      value
    });
  };

  const handleButton = () => {
    callApi(input.input);
  };

  const callApi = query => {
    console.log(query);
    axios("http://localhost:4000/movie", {
      headers: {
        Accept: "application/json"
      },
      params: {
        query: query,
        display: 4
      }
    })
      .then(res => {
        console.log(res.data.items);
        handleMovieList(res.data.items);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <>
        <Header />

        <InputDispatch.Provider value={dispatch}>
          <Search handleChange={handleChange} handleButton={handleButton} />
          <Result list={list.list} />
        </InputDispatch.Provider>
      </>
    </ThemeProvider>
  );
};

export default App;
