import React, { useState } from "react";
import { FirstComponent } from "./countComponentHook";

export const myContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("green");
  console.log();
  return (
    <myContext.Provider value={{ backgroundColor: theme }}>
     
      <div>
        <FirstComponent amount={9} />
        <button onClick={() => setTheme(theme == "red" ? "green" : "red")}>
          Toggle theme
        </button>
      </div>
    </myContext.Provider>
  );
}

export default App;

// Always use capital startin letter for react component
// issues
// To edit state use
//this.setState({count:amount})
// this.setState((prevState) => {
//   return { count: prevState.count + amount };
// });
