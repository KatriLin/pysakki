import React from "react";
import Header from "./Header";
import Busses from "./Busses";

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Header />
        <Busses />
      </div>
    );
  }
}

export default App;
