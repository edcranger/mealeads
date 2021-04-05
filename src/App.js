import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SingleRecipe from "./pages/SingleRecipe";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Router>
        <Navbar />
        <main className="flex-1 max-w-5xl  w-full  mx-auto px-8 flex flex-col ">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/recipe/profile/:id" component={SingleRecipe} />
            <Route path="*" component={Error} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
