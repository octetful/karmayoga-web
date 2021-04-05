
import './App.css';
import BottomNavbar from './components/BottomNavbar';
import {
  Route,
  useHistory,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Tasks from './pages/Tasks';

function App() {
  let history = useHistory();

  return (
    <div className="App">
      <BrowserRouter history={history} >
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/tasks" component={Tasks} />
        </Switch>
        <BottomNavbar value={"home"} />
      </BrowserRouter>
    </div>
  );
}

export default App;
