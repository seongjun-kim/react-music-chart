import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import MovieDetail from "./views/MovieDetail/MovieDetail";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "70px", minHeight: "calc(100vh - 100px)" }}>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route
            exact
            path="/name"
            render={() => <LandingPage type={"name"} />}
          />
          <Route
            exact
            path="/release"
            render={() => <LandingPage type={"release"} />}
          />
          <Route exact path="/movie/:movieId" component={MovieDetail} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
