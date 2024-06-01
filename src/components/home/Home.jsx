import Navbar from '../navbar/Navbar';
import Search from '../search/Search';
import QuotesList from '../quotes-list/QuotesList';
import FavoriteQuotes from '../FavoriteQuotes';
import { useState, useEffect, useContext } from 'react';
import { QuoteContext } from '../../App';

function retrieveQuotes() {
  return fetch("http://localhost:3000/quotes").then((response) =>
    response.json()
  );
}

export default function Home(){
    const [searchTerm, setSearchTerm] = useState('');
      // const [quotes, setQuotes] = useState([]);
    const { setQuotes } = useContext(QuoteContext);

    function onSearchChange(_searchTerm){
      setSearchTerm(_searchTerm);
    }

    useEffect(() => {
      retrieveQuotes().then((quotesFromServer) => setQuotes(quotesFromServer));
    }, []);
    // console.log(quotes);

    return(
    <>
      <Navbar />
      <Search onSearchChange={onSearchChange} />
      <FavoriteQuotes />
      <QuotesList searchTerm={searchTerm} />
    </>
    );
}