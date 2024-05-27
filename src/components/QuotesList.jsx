import { quotes } from './data.js';
import './QuotesList.css';

function QuotesList(){

    return(
        <section>
            <header>
                <h1>Your list of quotes</h1>
            </header>

            <ul className='quote-list'>
                { quotes.map((quote) => (
                  <li className="quote" key={quote.id}>
                    <div className='image-container'>
                        <img className="quote__image" src={quote.imageUrl}/>
                        <h4 className="quote__text">
                        {quote.text}
                        </h4>
                    </div>
                    <div>
                        <span className="quote__author">
                         {quote.author}
                        </span>
                        <span className="quote__date">
                            {quote.date}
                        </span>
                    </div>
                    <div className="quote__bookmark">
                        <i className="quote_bookmark-icon"></i>
                    </div>
                  </li>  
                )) }
            </ul>
        </section>
    )
}

export default QuotesList;