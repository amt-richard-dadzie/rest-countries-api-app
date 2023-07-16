import { Link, useParams } from "react-router-dom";
import * as C from "./styles";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../http";
import { CountryType } from "../../types/Country";
import { SingleCountry } from "../../components/SingleCountry";

export const Country = () => {
  const { name, code } = useParams();

  const [country, setCountry] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState(false);

  const getCountry = useCallback(
    async (params: string) => {
      setLoading(true);
      let response = name
        ? await api.getCountry(params)
        : await api.getCountryByCode(params);
      setCountry(response);
      setLoading(false);
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

  return (
    <C.CountryPage>
      <div className="container">
        <Link to="/" className="btn-back">
          Back
        </Link>
        {loading && <div className="loading">Loading......</div>}
        {country.map((data) => {
          return (
            <SingleCountry
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
