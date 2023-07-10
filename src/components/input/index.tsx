import React from "react";
import * as C from "./styles";

export const Input = () => {
  return (
    <C.InputArea>
      <input type="text" placeholder="Search by Country" />
      <select name="" id="">
        <option value="fliter by region" disabled selected>
          Filter by region
        </option>
      </select>
    </C.InputArea>
  );
};
