import { quotes } from './data.js';
import QuoteCard from './QuoteCard';
import './QuotesList.css';



function QuotesList(){

    return(
        <section>
            <header>
                <h1>Your list of quotes</h1>
            </header>

            <ul className="quote-list">
                { quotes.map((quoteItem) => (
                  <QuoteCard quoteElement = {quoteItem} key={quoteItem.id}/>
                )) }
            </ul>
        </section>
    )
}

export default QuotesList;