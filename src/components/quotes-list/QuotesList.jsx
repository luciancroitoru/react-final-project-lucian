import { quotes } from '../../data/data.js';
import QuoteCard from '../quote-card/QuoteCard.jsx';
import './QuotesList.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



function QuotesList({searchTerm}){
    console.log({searchTerm})

    const filteredQuotes = quotes.filter(({ text, author, date}) => (text+author+date).toLowerCase().includes(searchTerm.toLowerCase()));

    const quotesNotFound = filteredQuotes.length === 0;

    return(
        <section>
            <header className='title'>
                <h2>Your list of quotes:</h2>
            </header>

            {
                quotesNotFound ? (<p className='quoteNotFoundMessage'>Quote not found? Try redefining search.</p>) : 
            
            (<ul className="quote-list">
                {  filteredQuotes.map((quoteItem) => (
                <Link key={quoteItem.id} to={'/quote/' + quoteItem.id}>
                    <QuoteCard quoteElement={quoteItem}/>
                </Link>
                )) }
            </ul>)
            }
        </section>
    )
}

export default QuotesList;

QuotesList.propTypes = {
    searchTerm: PropTypes.string,
}