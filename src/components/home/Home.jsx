import Search from "../search/Search";
import QuotesList from "../quotes-list/QuotesList";
import { useState, useEffect, useContext } from "react";
import { AuthContext, QuoteContext } from "../../App";
import { getQuotesFromServer } from "../../lib/quotes";
import "./Home.css";
import Navbar from "../navbar/Navbar";

// function retrieveQuotes() {
//   return fetch("http://localhost:3000/quotes").then((response) =>
//     response.json()
//   );
// }

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  // const [quotes, setQuotes] = useState([]);
  const { quotes, setQuotes } = useContext(QuoteContext);
  // const[auth] = useState([]);
  const { auth } = useContext(AuthContext);

  function onSearchChange(_searchTerm) {
    setSearchTerm(_searchTerm);
  }

  // useEffect(() => {
  //   retrieveQuotes().then((quotesFromServer) => setQuotes(quotesFromServer));
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // // console.log(quotes);

  useEffect(() => {
    getQuotesFromServer(setQuotes, auth).catch((error) => console.log(error));
  }, [auth, setQuotes]);

  if (!quotes?.length) {
    return (
      <div className="no-quotes-error-message-container">
        <h2 className="no-quotes-error-message">
          There are no quotes to display.
        </h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Search onSearchChange={onSearchChange} />
      <QuotesList searchTerm={searchTerm} />
    </>
  );
}
