import React from "react";
import { BrowserRouter as Routers, Route } from "react-router-dom";

import Header from "./layouts/Header";

function App() {
  return (
    <Routers>
      <div className="App">
        <Header />
        {/* <Route path="/" component={Home}></Route> */}
      </div>
    </Routers>
  );
}

export default App;
