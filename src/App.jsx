import './App.css'
import Navbar from './components/Navbar';
import Search from './components/Search';

import QuotesList from './components/QuotesList';
import FavoriteQuotes from './components/FavoriteQuotes';



function App() {

  return (
    <>
      <Navbar/>
      <Search/>
      <FavoriteQuotes/>
      <QuotesList/>
    </> 
  )
}

export default App
