
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import home from './pages/Home'
import menu from './pages/Menu.js'
import About from './pages/About';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/menu" exact component={menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
        </Router>
      
    </div>
  );
}

export default App;
