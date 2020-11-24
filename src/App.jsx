import React from "react";
import { BrowserRouter as Routers, Route } from "react-router-dom";

import Header from "./layouts/Header";
import Sign_In from "./containers/Sign_In";
import Register from "./containers/Register";

function App() {
  return (
    <Routers>
      <div className="App">
        <Header />
        {/* <Route path="/" component={Home}></Route> */}
        {<Route path="/sign-in" component={Sign_In}></Route>}
        {<Route path="/register" component={Register}></Route>}
      </div>
    </Routers>
  );
}

export default App;
