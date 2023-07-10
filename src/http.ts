import axios from "axios";

const restCountriesApi = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

export const api = {
  getCountries: async () => {
    let response = await restCountriesApi.get("/all");
    return response.data;
  },
  getCountry: async (name: string) => {
    let response = await restCountriesApi.get(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    return response.data;
  },
  getCountryByCode: async (code: string) => {
    let response = await restCountriesApi.get(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    return response.data;
  },
};
