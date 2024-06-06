import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import { Routes, Route, useNavigate } from "react-router-dom";
import QuoteDetails from './components/quote-details/QuoteDetails';
import CreateQuote from './components/create-quote/CreateQuote';
import { getQuotesFromServer } from './lib/quotes';
import { Register } from './components/auth/register/Register';
import Login from './components/auth/login/Login';


// import CreateQuote from './components/CreateQuote';
// import Logout from './components/Logout';

export const QuoteContext = React.createContext();
export const AuthContext = React.createContext();

function App() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const[quotes, setQuotes] = useState([]);
  const[auth, setAuth] = useState([accessToken]);



useEffect(() =>{
  getQuotesFromServer(setQuotes, auth, navigate)
    .catch((error) => console.log(error));
}, [auth, navigate])

  return (
    <>
      <QuoteContext.Provider value={{quotes, setQuotes}}>
        <AuthContext.Provider value={{auth, setAuth}}>
        {/* <Navbar /> */}
          <Routes>
            <Route path="/" element = {<Home/>}></Route>
           <Route path="/quote/:idFromPath" element={<QuoteDetails/>}></Route>
            <Route path="/create-quote" element={<CreateQuote/>}></Route>
            <Route path="/edit-quote/:idFromPath" element={<CreateQuote/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </AuthContext.Provider>
      </QuoteContext.Provider>
    </>
  );
}

export default App
