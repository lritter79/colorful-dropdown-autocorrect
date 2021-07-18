import Header from "./Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Link1 from "./links/link1";
import Link2 from "./links/link2";
import Link3 from "./links/link3";
import Link4 from "./links/link4";
import Link5 from "./links/link5";
import Link6 from "./links/link6";
import Link7 from "./links/link7";
import Link8 from "./links/link8";

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
      <Header/>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </div>
        <Switch>
          <Route exact path="/1" component={Link1}/>
          <Route exact path="/2" component={Link2}/>
          <Route exact path="/3" component={Link3}/>
          <Route exact path="/4" component={Link4}/>
          <Route exact path="/5" component={Link5}/>
          <Route exact path="/6" component={Link6}/>
          <Route exact path="/7" component={Link7}/>
          <Route exact path="/8" component={Link8}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
