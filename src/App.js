
import './App.css';
import './mobile.css';
import './ipad.css';
import Header from './components/Header';
import Navbar from './components/Navbar'; 

import Haqqimizda from 'views/Haqqimizda';

import Footer from './components/Footer'
import Home from "./views/Home"
import Xidmetlerimiz from "./views/xidmetlerimiz"
import Tarifler from "./views/tarifler"
import Suallar from "./views/suallar"
import Filiallar from "./views/filiallar"
import Unvan from './views/unvan';



import {
  BrowserRouter,
 Routes,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";



function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/haqqimizda">
            <Haqqimizda/>
          </Route>
          <Route exact path="/haqqimizda">
            <Haqqimizda/>
          </Route>
          <Route exact path="/xidmetlerimiz">
            <Xidmetlerimiz/>
          </Route>
          <Route exact path= "/tarifler">
            <Tarifler/>
          </Route>
          <Route exact path="/suallar">
            <Suallar/>
          </Route>
          <Route exact path="/filiallar">
            <Filiallar/>
          </Route>
          <Route exact path="/unvan">
            <Unvan/>
          </Route>
          




          <Redirect from="*" to="/home"/>
        </Switch>
        <Footer />
      </BrowserRouter>
      
    </div>

  );
}

export default App;
