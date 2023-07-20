import { useState } from "react";
import { InputProps } from "../../types/Input";
import * as C from "./styles";
import { useForm } from "../../contexts/ThemeContext";
import useDebounce from "./useDebounce";

export const Input = ({ value, handleSearch }: InputProps) => {
  const { state } = useForm();

  const [input, setInput] = useState("");

  const debouncedChange = useDebounce(handleSearch, 500);

  const handleChange = (e: string) => {
    setInput(e);
    debouncedChange(e);
  };

  const Styles = {
    backgroundColor: state.theme === "light" ? "" : "rgb(43, 55, 67)",
    color: state.theme === "light" ? "" : "#FFF",
    transition: "all ease 0.3s",
  };

  return (
    <C.InputArea>
      <input
        type="text"
        placeholder="Search by Country"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        style={Styles}
      />
      <select
        style={Styles}
        defaultValue=""
        onChange={(e) => handleChange(e.target.value)}
      >
        <option disabled hidden value="">
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
