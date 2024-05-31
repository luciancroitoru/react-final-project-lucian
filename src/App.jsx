import './App.css';
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuoteDetails from './components/quote-details/QuoteDetails';

// import CreateQuote from './components/CreateQuote';
// import Logout from './components/Logout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/quote/:idFromPath" element={<QuoteDetails/>}></Route>
          {/* <Route path="/create-quote" element={<CreateQuote />} />
          <Route path="/logout" element={<Logout />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
