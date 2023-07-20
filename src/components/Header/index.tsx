import * as C from "./styles";
import { themeActions, useForm } from "../../contexts/ThemeContext";
import { FaMoon } from "react-icons/fa";

export const Header = () => {
  const { state, dispatch } = useForm();

  const handleChangeTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({
      type: themeActions.setTheme,
      payload: newTheme,
    });
  };

  const Styles = {
    backgroundColor: state.theme === "light" ? "" : "rgb(43, 55, 67)",
    color: state.theme === "light" ? "" : "#FFF",
    transition: "all ease 0.3s",
  };
  return (
    <C.Header style={Styles}>
      <div className="container">
        <h1>Where in the World?</h1>
        <p onClick={handleChangeTheme}>
          <FaMoon /> <span className="text-right ">Dark Mode</span>
        </p>
      </div>
    </C.Header>
  );
};
