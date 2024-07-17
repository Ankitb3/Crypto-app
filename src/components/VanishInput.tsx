
import { useState } from "react";
import  {PlaceholdersAndVanishInput}  from "../components/magicui/animateInput";

export function  AnimatedInput() {
  const[searchText,setSearchText] = useState('')
  const placeholders = [
    "Search a cryptoCurrency",
    "More than 200 cryptoCurrency listed",
    "Find all crypto",
    "Historic data",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchText(e.target.value)
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchText,"search text");
  };
  return (
    <div className="flex flex-col justify-center  items-center px-4">
    
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
