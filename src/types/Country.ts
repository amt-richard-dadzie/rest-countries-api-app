export interface CountryType {
  name: string;
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
