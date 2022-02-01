import { makeStyles } from "@material-ui/core";
import './App.css';
import { BrowserRouter ,Switch,Route } from 'react-router-dom';
import Header from "./Components/Header";
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage';
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));
function App() {
  const classes = useStyles();
  return (


    <BrowserRouter>
  <div className={classes.App}>
  <Header/>
 
        <Route exact path="/" component={Homepage} />
        <Route exact path="/coins/:id"  component={Coinpage} />
      
  
  </div>
   
</BrowserRouter>







  );
}

export default App;
