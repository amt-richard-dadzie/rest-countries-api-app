import * as C from "./styles";
import { useState } from "react";
import { useForm } from "../../contexts/ThemeContext";
import useCountries from "../../contexts/CountriesContext";
import { Input } from "../../components/input";
import { CountryItem } from "../../components/CountryItem";
import { numberWithCommas } from "../Country/index";

export const Countries = () => {
  const { state } = useForm();

  const { countries, isState } = useCountries();
  const [selectedItem, setSelectedItem] = useState("");
  const [inputValue, setInputValue] = useState("");

  //Update the selectedItem with it new state
  function handleSelectedItemChange(selectedItem: string) {
    setSelectedItem(selectedItem);
  }

  //Filtering countries data by searching country name or selecting country region
  const filteredCountries = countries
    .filter((country) =>
      country.name.toLowerCase().includes(inputValue.toLowerCase())
    )
    .filter((country) => {
      return country.region.toLowerCase().includes(selectedItem.toLowerCase());
    });

  const Styles = {
    backgroundColor: state.theme === "light" ? "" : "rgb(32, 45, 54)",
    color: state.theme === "light" ? "" : "#FFF",
    transition: "all ease 0.3s",
  };

  return (
    <C.CountriesArea style={Styles}>
      <Input
        selectedItem={selectedItem}
        handleSelectedItemChange={handleSelectedItemChange}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {isState === "loading" && <div className="loading">Loading.....</div>}
      {isState === "resolved" && (
        <div className="countries">
          {filteredCountries.map((country) => {
            return (
              <CountryItem
                key={country.numericCode}
                name={country.name}
                population={numberWithCommas(country.population)}
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
