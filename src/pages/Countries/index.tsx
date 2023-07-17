import * as C from "./styles";
import { Input } from "../../components/Input";
import { useState, useEffect } from "react";
import { CountriesType } from "../../types/Countries";
import { api } from "../../http";
import { CountryItem } from "../../components/CountryItem";

export const Countries = () => {
  const [countries, setCountries] = useState<CountriesType[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

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

  const lowerSearch = search.toLowerCase();

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(lowerSearch)
  );
  return (
    <C.CountriesArea>
      <Input value={search} handleSearch={setSearch} />
      {loading && <div className="">Loading.....</div>}
      {!loading && (
        <div className="countries">
          {filteredCountries.map((country) => {
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
