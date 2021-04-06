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
import TaskScheduler from './pages/TaskScheduler';
import { MuiThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";


function App() {
  let history = useHistory();

  const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        backgroundColor: theme.palette.background.default,
    },
  }));
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
        type: "dark",
    },
  });

  return (
    <div className="App" className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter history={history} >
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/scheduler" component={TaskScheduler} />
          </Switch>
          <BottomNavbar value={"home"} />
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
