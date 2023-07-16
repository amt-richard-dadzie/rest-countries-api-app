import axios from "axios";

const restCountriesApi = axios.create({
  baseURL: "https://restcountries.com/v2",
});

export const api = {
  getCountries: async () => {
    let response = await restCountriesApi.get("/all");
    return response.data;
  },
  getCountry: async (name: string) => {
    let response = await restCountriesApi.get(`/name/${name}?fullText=true`);
    return response.data;
  },
  getCountryByCode: async (code: string) => {
    let response = await restCountriesApi.get(`/alpha?codes=${code}`);
    return response.data;
  },
};
