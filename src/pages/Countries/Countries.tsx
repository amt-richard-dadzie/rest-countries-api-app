import * as C from "./styles";
import { Input } from "../../components/Input";
import { api } from "../../http";
import { useState, useEffect } from "react";
import { CountriesType } from "../../types/Countries";

export const Countries = () => {
  const [countries, setCountries] = useState<CountriesType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    setLoading(false);
    let countries = await api.getCountries();
    setCountries(countries);
    console.log(countries);
    setLoading(true);
  };
  return (
    <C.CountriesArea>
      <Input />
      <div className="countries">
        {loading && <div className="">Loading....</div>}
        {!loading &&
          countries.map((item, index) => {
            return <div>{item.name}</div>;
          })}
      </div>
    </C.CountriesArea>
  );
};
