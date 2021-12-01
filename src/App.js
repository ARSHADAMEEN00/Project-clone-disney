import Home from "./Pages/Home";
import Header from "./components/Header";
import { Redirect, Route, Switch } from "react-router-dom";
import Details from "./Pages/Details";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { useEffect, useState } from "react";
import NotFond from "./Pages/NotFond";
import AllMovies from "./Pages/AllMovies";
function App() {
  const [user, setUser] = useState([]);

  const LOCAL_STORAGRE_KEY = "User";
  useEffect(() => {
    const retriveData = JSON.parse(localStorage.getItem(LOCAL_STORAGRE_KEY));
    if (retriveData) {
      setUser(retriveData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGRE_KEY, JSON.stringify(user));
  }, [user]);
  return (
    <div className="App">
      <Header user={user} />
      <Switch>
        <Route exact path="/">
          <Login user={user} />
        </Route>
        <Redirect from="nediya99/disney-plus-rt" to="/signup" />
        <Route path="/signup">
          <SignUp user={user} setUser={setUser} />
        </Route>
        <Route path="/home">
          <Home user={user} />
        </Route>
        <Route path="/movies">
          <AllMovies/>
                  </Route>
        <Route path="/Detail/:id">
          <Details user={user} />
        </Route>
        <Route>
          <NotFond path="/404" />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}
export default App;
