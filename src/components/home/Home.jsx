// import Navbar from '../navbar/Navbar';
import Search from '../search/Search';
import QuotesList from '../quotes-list/QuotesList';
import FavoriteQuotes from '../FavoriteQuotes';
import { useState, useEffect, useContext } from 'react';
import { QuoteContext } from '../../App';
import { getQuotesFromServer } from '../../lib/quotes';
import "./Home.css";

// function retrieveQuotes() {
//   return fetch("http://localhost:3000/quotes").then((response) =>
//     response.json()
//   );
// }

export default function Home(){
    const [searchTerm, setSearchTerm] = useState('');
      // const [quotes, setQuotes] = useState([]);
    const { quotes, setQuotes } = useContext(QuoteContext);
    const[auth] = useState([]);

    function onSearchChange(_searchTerm){
      setSearchTerm(_searchTerm);
    }

    // useEffect(() => {
    //   retrieveQuotes().then((quotesFromServer) => setQuotes(quotesFromServer));
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    // // console.log(quotes);

    useEffect(() =>{
      getQuotesFromServer(setQuotes, auth)
        .catch((error) => console.log(error));
    }, [auth, setQuotes])

    if(!quotes?.length){
      return(
        <h2 className='no-quotes-error-message'>There are no quotes to display. Please create one from the navbar.</h2>
      )
    }

    return(
    <>
      <Search onSearchChange={onSearchChange} />
      <FavoriteQuotes />
      <QuotesList searchTerm={searchTerm} />
    </>
    );
}