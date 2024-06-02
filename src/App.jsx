import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuoteDetails from './components/quote-details/QuoteDetails';
import CreateQuote from './components/create-quote/CreateQuote';
import { getQuotesFromServer } from './lib/quotes';

// import CreateQuote from './components/CreateQuote';
// import Logout from './components/Logout';

export const QuoteContext = React.createContext();

function App() {
  const[quotes, setQuotes] = useState([]);



useEffect(() =>{
  getQuotesFromServer(setQuotes);
}, [])

  return (
    <>
      <QuoteContext.Provider value={{quotes, setQuotes}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Home/>}></Route>
           <Route path="/quote/:idFromPath" element={<QuoteDetails/>}></Route>
            <Route path="/create-quote" element={<CreateQuote/>}></Route>
            <Route path="/edit-quote/:idFromPath" element={<CreateQuote/>}></Route>
            </Routes>
        </BrowserRouter>
      </QuoteContext.Provider>
    </>
  );
}

export default App
