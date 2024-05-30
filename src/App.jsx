import { useState } from "react";

import './App.css';

import Navbar from './components/Navbar';
import Search from './components/Search';

import QuotesList from './components/QuotesList';
import FavoriteQuotes from './components/FavoriteQuotes';



function App() {

  const [searchTerm, setSearchTerm] = useState('');

  function onSearchChange(_searchTerm){
    setSearchTerm(_searchTerm);
  }

  return (
    <>
      <Navbar/>
      <Search onSearchChange = {onSearchChange}/>
      <FavoriteQuotes/>
      <QuotesList searchTerm = {searchTerm}/>
    </> 
  )
}

export default App
