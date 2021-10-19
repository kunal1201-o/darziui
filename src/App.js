
import Address from './Components/Address';

import Main from './Components/Main';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DryClean from './Components/DryClean';
import SelectLocation from './Components/SelectLocation';
import Coupon from './Components/Coupon';
import Categories from './Components/Categories';
import Cart from './Components/Cart';
import About from './Components/About';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import Readymade from './Components/Readymade';
import MenproductList from './Components/MenproductList';
import Womenproduct from './Components/Womenproduct';
import SingleProduct from './Components/SingleProduct';

import Boys from './Components/Boys';
import Girls from './Components/Girls';
import HomeDe from './Components/HomeDe';
import Baby from './Components/Baby';
import MenCollection from './Components/ProductCollection/MenCollection';
import WomenCollection from './Components/ProductCollection/WomenCollection';
import BabyCollection from './Components/ProductCollection/BabyCollection';
import BoyCollection from './Components/ProductCollection/BoyCollection';
import GirlCollection from './Components/ProductCollection/GirlCollection';
import Login from './Components/Login';
import Otp from './Components/Otp';
import SetLocation from './Components/SetLocation';
import DryCleanHome from './Components/DryCleanHome';
import Tailor from './Components/Tailor/Tailor';
import TailorHome from './Components/Tailor/TailorHome';
import PriceListDry from './Components/PriceListDry';
import YourOrder from './Components/YourOrder';
import ProfileEdit from './Components/ProfileEdit';
import AddAddress from './Components/AddAddress';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/DryClean" component={DryClean} />
          <Route path="/SelectLocation" component={SelectLocation} />
          <Route path="/Coupon" component={Coupon} />
          <Route path="/Address" component={Address} />
          <Route path="/Categories" component={Categories} />
          <Route path="/Cart" component={Cart} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Readymade" component={Readymade} />
          <Route path="/MenproductList" component={MenproductList} />
          <Route path="/Womenproduct" component={Womenproduct} />
          <Route path="/SingleProduct" component={SingleProduct} />
          <Route path="/Boys" component={Boys} />
          <Route path="/Girls" component={Girls} />
          <Route path="/HomeDe" component={HomeDe} />
          <Route path="/Baby" component={Baby} />
          <Route path="/MenCollection" component={MenCollection} />
          <Route path="/WomenCollection" component={WomenCollection} />
          <Route path="/BabyCollection" component={BabyCollection} />
          <Route path="/BoyCollection" component={BoyCollection} />
          <Route path="/GirlCollection" component={GirlCollection} />
          <Route path="/Login" component={Login} />
          <Route path="/Otp" component={Otp} />
          <Route path="/SetLocation" component={SetLocation} />
          <Route path="/DryCleanHome" component={DryCleanHome} />
          <Route path='/Tailor' component={Tailor} />
          <Route path='/TailorHome' component={TailorHome} />
          <Route path='/PriceListDry' component={PriceListDry} />
          <Route path='/YourOrder' component={YourOrder} />
          <Route path='/ProfileEdit' component={ProfileEdit} />
          <Route path='/AddAddress' component={AddAddress} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
