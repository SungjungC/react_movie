import React, { useReducer } from "react";
import axios from "axios";
import reducer from "./hooks/reducer";
import { Search, Header, Result } from "./component";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./asset/style/globalstyle";
import defaultTheme from "./asset/style/themes/default";

export const InputDispatch = React.createContext(null);

const App = () => {
  const [input, dispatch] = useReducer(reducer, "");

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_VALUE",
      name,
      value
    });
  };

  const handleButton = () => {
    callApi(input);
  };

  const callApi = query => {
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
        console.log(res);
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
          <Search
            handleChange={handleChange}
            input={input}
            handleButton={handleButton}
          />
          <Result />
        </InputDispatch.Provider>
      </>
    </ThemeProvider>
  );
};

export default App;
