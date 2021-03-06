import React, { useState } from "react";
import { FirstComponent } from "./countComponentHook";

export const myContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("white");
  console.log();
  return (
    <myContext.Provider value={{ backgroundColor: theme }}>
      <div>
        <FirstComponent amount={9} />
        <button onClick={() => setTheme(theme == "white" ? "lightgrey" : "white")}>
          Toggle th
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
