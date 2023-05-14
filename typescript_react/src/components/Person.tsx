import { useState } from "react";
import { FC } from "react";

export enum hairColors {
  Blonde = "Your hair is blonde, good for you",
  Brown = "Your hair is brown, good for you",
  Pink = "Your hair is pink, good for you",
}
interface Props {
  name: string;
  age: number;
  email: string;
  haircolor: hairColors;
  // getName:(name:string)=>string;
}
// export const Person= ({name, age,email}: Props) =>{
export const Person: FC<Props> = ({ name, age, email, haircolor }) => {
  const [country, setCountry] = useState<string | null>(null);
  type NameType = "Janvee" | "Atharva";
  const nameForType: NameType = "Atharva";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <input
        type="text"
        placeholder="Write down your country.."
        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange={handleChange}
      />
      <br />
      {country}
      <br />
      {haircolor}
    </div>
  );
};
