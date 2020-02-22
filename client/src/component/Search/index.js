import React from "react";
import * as Style from "./style";

const Search = ({ handleChange, handleButton }) => {
  return (
    <Style.Container>
      <Style.Content>
        <input name="input" onChange={handleChange} />
        <button onClick={handleButton}>버튼</button>
      </Style.Content>
    </Style.Container>
  );
};

export default Search;
