import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
  ReactNode,
} from "react";

interface Country {
  name: string;
  alpha3Code: string;
  nativeName: string;
  numericCode: number;
  population: number;
  region: string;
  capital: string;
  subregion: string;
  flags: {
    png: string;
  };
  topLevelDomain: [string];
  currencies: [
    {
      name: string;
    }
  ];
  languages: [
    {
      name: string;
    }
  ];
  borders: [string];
}

interface CountryContextProps {
  countries: Country[];
  findCountryByName: (name: string) => Country | undefined;
  findByCode: (altSpelling: string) => Country | undefined;
  isState: "loading" | "resolved" | "error";
}

const CountryContext = createContext<CountryContextProps>({
  countries: [],
  findCountryByName: () => undefined,
  findByCode: () => undefined,
  isState: "loading",
});

interface CountriesProviderProps {
  children: ReactNode;
}

export const CountriesProvider: React.FC<CountriesProviderProps> = ({
  children,
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isState, setIsState] = useState<"loading" | "resolved" | "error">(
    "loading"
  );

  const findCountryByName = useCallback(
    (name: string) => {
      if (!countries) return undefined;
      return countries.find((country) => country.name === name);
    },
    [countries]
  );

  const findByCode = (code: string) => {
    console.log("findByCode called with code:", code);
    if (!countries) return undefined;
    return countries.find((country) => country.alpha3Code === code);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v2/all?fields=name,nativeName,numericCode,population,region,subregion,capital,flags,alpha3Code,continents,currencies,languages,topLevelDomain,borders"
        );
        const data: Country[] = await response.json();
        console.log(data);
        setCountries(data);
        setIsState("resolved");
      } catch (err) {
        setIsState("error");
        console.log(err);
      }
    })();
  }, []);

  return (
    <CountryContext.Provider
      value={{ countries, findCountryByName, findByCode, isState }}
    >
      {children}
    </CountryContext.Provider>
  );
};

const useCountries = () => {
  const { countries, findCountryByName, findByCode, isState } =
    useContext(CountryContext);
  //   console.log("countries:", countries);

  return {
    countries,
    findCountryByName,
    findByCode,
    isState,
  };
};

export default useCountries;
