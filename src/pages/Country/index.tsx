import { Link, useParams } from "react-router-dom";
import * as C from "./styles";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../http";
import { CountryType } from "../../types/Country";
import { SingleCountry } from "../../components/SingleCountry";
import { useForm } from "../../contexts/ThemeContext";
import { BiArrowBack } from "react-icons/bi";

export const Country = () => {
  const { state } = useForm();

  const { name, code } = useParams();

  const [country, setCountry] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState(false);

  const getCountry = useCallback(
    async (params: string) => {
      try {
        setLoading(true);
        let response = name
          ? await api.getCountry(params)
          : await api.getCountryByCode(params);
        setCountry(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    },
    [name]
  );

  useEffect(() => {
    if (name) {
      getCountry(name);
    } else if (code) {
      getCountry(code);
    }
  }, [name, code, getCountry]);

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
        {loading && <div className="loading">Loading......</div>}
        {country.map((data) => {
          return (
            <SingleCountry
              key={data.numericCode}
              name={data.name}
              nativeName={data.nativeName}
              population={data.population}
              capital={data.capital}
              flag={data.flags.png}
              region={data.region}
              subregion={data.subregion}
              topLevelDomain={data.topLevelDomain[0]}
              currencies={data.currencies && data.currencies}
              languages={data.languages}
              borders={data.borders}
            />
          );
        })}
      </div>
    </C.CountryPage>
  );
};
