import "./App.css";
import { FC, createContext } from "react";
import { Person, hairColors } from "./components/Person";
// const name: string = "Atharva";
// const age: number = 19;
// const isMarried: boolean = false;

// const getName=(name:string):(number | boolean)=>{
//   if(name==="Atharva"){
//   return 20;
//   }
//   else{
//     return false;
//   }
// }

// return (
//   <div className="App">
//     {name}
//     <br />
//     {age}
//     {isMarried}
//   </div>

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

export const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "ATHARVA",
    age: 20,
    country: "India",
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person
          name="Atharva"
          age={20}
          email="abc@gmail.com"
          haircolor={hairColors.Pink}
        />
      </div>
    </AppContext.Provider>
  );
};
