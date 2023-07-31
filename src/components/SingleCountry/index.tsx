import * as C from "./styles";
import { SingleCountryTS } from "../../types/SingleCountry";
import { Link } from "react-router-dom";
import { useForm } from "../../contexts/ThemeContext";
import useCountries from "../../contexts/CountriesContext";

export const SingleCountry = ({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
  flag,
}: SingleCountryTS) => {
  const { state } = useForm();

  const { findByCode } = useCountries();

  const StylesData = {
    backgroundColor: state.theme === "light" ? "" : "rgb(43, 55, 67)",
    color: state.theme === "light" ? "#000" : "#FFF",
  };
  return (
    <C.CountryData>
      <img src={flag} alt={`flag of ${name}`} />
      <div className="dt-area">
        <h1>{name}</h1>
        <div className="data-basic">
          <div>
            <p>
              <span>Native Name: </span>
              {nativeName}
            </p>
            <p>
              <span>Population: </span>
              {population}
            </p>
            <p>
              <span>Subregion: </span>
              {subregion}
            </p>
            <p>
              <span>Region: </span>
              {region}
            </p>
            {capital && (
              <p>
                <span>Capital: </span>
                {capital}
              </p>
            )}
          </div>
          <div>
            <p className="topLevel">
              <span>Top Level Domain: </span>
              {topLevelDomain}
            </p>
            {currencies && (
              <p>
                <span>Currencies: </span>
                {currencies.map((item, index) => (
                  <span className="light" key={index}>
                    {item.name}
                  </span>
                ))}
              </p>
            )}
            <p>
              <span>Languages: </span>
              {languages.map((item, index) => (
                <span className="light" key={index}>
                  {item.name}
                  {index < languages.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          </div>
        </div>
        {borders && (
          <div className="data-border">
            <p>Border Countries: </p>
            <div className="borders">
              {borders.map((code, index) => {
                const countryName = findByCode(code);
                if (!countryName) {
                  return <span>Loading..</span>;
                }
                return (
                  <Link
                    to={`/country/${countryName.name}`}
                    key={index}
                    style={StylesData}
                  >
                    {countryName.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </C.CountryData>
  );
};
