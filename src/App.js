import './App.css';
import {BrowserRouter as Route} from 'react-router-dom'
import NavBarBoot from '../src/components/navbarMui/index'
import HeroSection from '../src/components/hero/HeroSection'




function App() {
  return (
    <div className="App">
      <Route>
      <NavBarBoot> </NavBarBoot>
      <HeroSection></HeroSection>
      </Route>
    
    </div>
  );
}

export default App;
