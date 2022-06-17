
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import { GlobalStyle } from './components/style/Global.style';
import  HeaderStyled  from './components/style/Header.style';
import Country from './pages/Country';
import { useState } from 'react';
import { CountryContext } from './helper/CountryContext';
function App() {
  const [isAll,setIsAll] = useState(true);
  const [isFilter,setIsFilter] = useState(false);
  const [isSearched,setIsSearched] = useState(false);
  const [filterValue,setFilterValue] = useState('');
  return (
    <div className="App">
      <GlobalStyle/>
      <Router>
        <HeaderStyled color='hsl(0, 0%, 100%)' backgroundColor='hsl(209, 23%, 22%)' />
        <CountryContext.Provider value={{isAll,setIsAll,isFilter,setIsFilter,isSearched,setIsSearched,filterValue,setFilterValue}}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/country:name' element={<Country />}></Route>
        </Routes>
        </CountryContext.Provider>
      </Router>
    </div>
  );
}

export default App;
