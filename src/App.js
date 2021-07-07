
import './App.css';
import Homepage from './Pages/Homepage/homepage.componenet';
import {Switch, Route} from 'react-router-dom';
import Shoppage from './Pages/ShopPgae/shop.component';


const Hatspage =()=>(
  <div>
    <h1>HatPage</h1>
  </div>
)

const Topicdetails =()=>(
  <div>
    <h1>TopicPage</h1>
  </div>
)

const TopicList =()=>(
  <div>
    <h1>TopicList</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
      <Route exact path = '/' component = {Homepage}></Route>
      <Route  path = '/shop' component = {Shoppage}></Route>
      </Switch>
    </div>
  );
}

export default App;
