import React from "react";
import MovieCard from "../MovieCard";
import * as Style from "./style";

const Result = ({ list }) => {
  console.log("Result", list);

  if (list)
    return (
      <Style.Container>
        <Style.Content>
          {list.map((li, index) => {
            return <MovieCard data={li} key={index} />;
          })}
        </Style.Content>
      </Style.Container>
    );
  else return <></>;
};

export default Result;
