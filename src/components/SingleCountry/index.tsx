import * as C from "./styles";
import { SingleCountryTS } from "../../types/SingleCountry";
import { Link } from "react-router-dom";

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
  return (
    <C.CountryData>
      <div className="img-area">
        <img src={flag} alt={`flag of ${name}`} />
      </div>
      <div className="dt-area">
        <h1>{name}</h1>
        <div className="data-basic">
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
              </span>
            ))}
          </p>
        </div>
        {borders && (
          <div className="data-border">
            <p>Border Countries: </p>
            <div className="borders">
              {borders.map((item, index) => (
                <Link to={`/code/${item}`} key={index}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </C.CountryData>
  );
};
