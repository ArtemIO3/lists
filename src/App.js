import logo from './logo.svg';
import './App.css';
import { MyList } from './components/MyList/MyList';
import { Navigation } from './components/Navigation/Navigation';
import { Gallery } from './components/Gallery/Gallery';
import {User} from './components/User/User';

function App() {
  return (
    <div className="App">
<MyList/>
<Navigation/>
<Gallery/>
<User/>
    </div>
  );
}
export default App;
