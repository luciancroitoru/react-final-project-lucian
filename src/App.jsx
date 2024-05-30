import './App.css';
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuoteDetails from './components/quote-details/QuoteDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/quote/:idFromPath" element={<QuoteDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
