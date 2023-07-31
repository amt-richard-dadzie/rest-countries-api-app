import { InputProps } from "../../types/Input";
import * as C from "./styles";
import { useForm } from "../../contexts/ThemeContext";
import { HiOutlineSearch } from "react-icons/hi";

const continents = ["", "Africa", "America", "Asia", "Europe", "Oceania"];

export const Input = ({
  selectedItem,
  handleSelectedItemChange,
  inputValue,
  setInputValue,
}: InputProps) => {
  const { state } = useForm();

  const Styles = {
    backgroundColor: state.theme === "light" ? "" : "rgb(43, 55, 67)",
    color: state.theme === "light" ? "" : "#FFF",
    transition: "all ease 0.3s",
  };

  return (
    <C.InputArea>
      <div className="inputField" style={Styles}>
        <HiOutlineSearch size="1.5em" />
        <input
          type="text"
          placeholder="Search by Country"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={Styles}
        />
      </div>
      <select
        style={Styles}
        value={selectedItem}
        onChange={(e) => handleSelectedItemChange(e.target.value)}
      >
        {continents.map((item, index) => (
          <option key={`${item}${index}`} value={item}>
            {item || "Filter by Region"}
          </option>
        ))}
      </select>
    </C.InputArea>
  );
};
