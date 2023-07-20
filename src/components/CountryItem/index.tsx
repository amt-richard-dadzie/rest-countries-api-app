import * as C from "./styles";
import { CountryCard } from "../../types/CountryCard";
import { Link } from "react-router-dom";
import { useForm } from "../../contexts/ThemeContext";

export const CountryItem = ({
  name,
  population,
  region,
  capital,
  flag,
}: CountryCard) => {
  const { state } = useForm();

  const Styles = {
    backgroundColor: state.theme === "light" ? "" : "rgb(43, 55, 63)",
  };

  const StylesData = {
    color: state.theme === "light" ? "" : "#FFF",
  };

  return (
    <C.CountryCard style={Styles}>
      <Link to={`/country/${name}`}>
        <div className="flag">
          <img src={flag} alt={`flag of ${name}`} />
        </div>
        <div className="data" style={StylesData}>
          <p className="country-name">{name}</p>
          <p>
            Population: <span>{population}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </Link>
    </C.CountryCard>
  );
};
