import * as C from "./styles";
import { useState, useEffect } from "react";
import { CountriesType } from "../../types/Countries";
import { api } from "../../http";
import { useForm } from "../../contexts/ThemeContext";
import { Input } from "../../components/Input/index";
import { CountryItem } from "../../components/CountryItem";

export const Countries = () => {
  const { state } = useForm();

  const [countries, setCountries] = useState<CountriesType[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getAllCountries = async () => {
    try {
      setLoading(true);
      let response = await api.getCountries();
      setCountries(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const lowerSearch = search.toLowerCase();

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(lowerSearch) ||
      country.region.toLowerCase().includes(lowerSearch)
  );

  const Styles = {
    backgroundColor: state.theme === "light" ? "" : "rgb(32, 45, 54)",
    color: state.theme === "light" ? "" : "#FFF",
    transition: "all ease 0.3s",
  };

  return (
    <C.CountriesArea style={Styles}>
      <Input value={search} handleSearch={setSearch} />
      {loading && <div className="loading">Loading.....</div>}
      {!loading && (
        <div className="countries">
          {filteredCountries.map((country) => {
            return (
              <CountryItem
                key={country.numericCode}
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
