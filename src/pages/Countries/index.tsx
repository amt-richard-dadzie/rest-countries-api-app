import * as C from "./styles";
import { Input } from "../../components/Input";
import { useState, useEffect } from "react";
import { CountriesType } from "../../types/Countries";
import { api } from "../../http";
import { CountryItem } from "../../components/CountryItem";

export const Countries = () => {
  const [countries, setCountries] = useState<CountriesType[]>([]);
  const [loading, setLoading] = useState(false);

  const getAllCountries = async () => {
    setLoading(true);
    let response = await api.getCountries();
    setCountries(response);
    console.log(response);
    setLoading(false);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <C.CountriesArea>
      <Input />
      {loading && <div className="">Loading.....</div>}
      {!loading && (
        <div className="countries">
          {countries.map((country) => {
            return (
              <CountryItem
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flags.png}
              />
            );
          })}
        </div>
      )}
    </C.CountriesArea>
  );
};
