import * as C from "./styles";
import { CountryCard } from "../../types/CountryCard";
import { Link } from "react-router-dom";

export const CountryItem = ({
  name,
  population,
  region,
  capital,
  flag,
}: CountryCard) => {
  return (
    <C.CountryCard>
      <Link to={`/country/${name}`}>
        <div className="flag">
          <img src={flag} alt={`flag of ${name}`} />
        </div>
        <div className="data">
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
