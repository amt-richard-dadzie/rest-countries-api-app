import { Link, useParams } from "react-router-dom";
import * as C from "./styles";
import { SingleCountry } from "../../components/SingleCountry";
import { useForm } from "../../contexts/ThemeContext";
import useCountries from "../../contexts/CountriesContext";
import { BiArrowBack } from "react-icons/bi";
import { useMemo } from "react";

export function numberWithCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const Country = () => {
  const { state } = useForm();

  const { name } = useParams();

  const { findCountryByName } = useCountries();

  const country = useMemo(() => {
    if (name) {
      return findCountryByName(name);
    }
    return null;
  }, [findCountryByName, name]);

  const Styles = {
    backgroundColor: state.theme === "light" ? "" : "rgb(32, 45, 54)",
    color: state.theme === "light" ? "" : "#FFF",
    transition: "all ease 0.3s",
  };

  const StylesData = {
    backgroundColor: state.theme === "light" ? "" : "rgb(43, 55, 67)",
    color: state.theme === "light" ? "#000" : "#FFF",
  };
  return (
    <C.CountryPage style={Styles}>
      <div className="container">
        <Link to="/" className="btn-back" style={StylesData}>
          <BiArrowBack size="1.4em" />
          <span>Back</span>
        </Link>
        {country ? (
          <SingleCountry
            key={country.numericCode}
            name={country.name}
            nativeName={country.nativeName}
            population={numberWithCommas(country.population)}
            capital={country.capital}
            flag={country.flags.png}
            region={country.region}
            subregion={country.subregion}
            topLevelDomain={country.topLevelDomain[0]}
            currencies={country.currencies && country.currencies}
            languages={country.languages}
            borders={country.borders}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </C.CountryPage>
  );
};
