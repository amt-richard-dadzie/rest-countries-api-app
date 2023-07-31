export interface InputProps {
  selectedItem: string;
  handleSelectedItemChange: (selectedItem: string) => void;
  inputValue: string;
  setInputValue: (inputValue: string) => void;
}
