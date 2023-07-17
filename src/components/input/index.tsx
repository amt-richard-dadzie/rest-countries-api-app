import { InputProps } from "../../types/Input";
import * as C from "./styles";

export const Input = ({ value, handleSearch }: InputProps) => {
  return (
    <C.InputArea>
      <input
        type="text"
        placeholder="Search by Country"
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <select onChange={(e) => handleSearch(e.target.value)}>
        <option value="fliter by region" disabled selected>
          Filter by region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </C.InputArea>
  );
};
