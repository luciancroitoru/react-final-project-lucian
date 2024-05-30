import Navbar from '../navbar/Navbar';
import Search from '../search/Search';
import QuotesList from '../quotes-list/QuotesList';
import FavoriteQuotes from '../FavoriteQuotes';
import { useState } from 'react';

export default function Home(){
    const [searchTerm, setSearchTerm] = useState('');

    function onSearchChange(_searchTerm){
      setSearchTerm(_searchTerm);
    }

    return(
        <>
        <Navbar/>
        <Search onSearchChange = {onSearchChange}/>
        <FavoriteQuotes/>
        <QuotesList searchTerm = {searchTerm}/>
        </>
    );
}