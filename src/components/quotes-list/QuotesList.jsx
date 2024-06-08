// import { quotes } from '../../data/data.js';
import { useContext } from "react";
import QuoteCard from "../quote-card/QuoteCard.jsx";
import "./QuotesList.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { QuoteContext } from "../../App.jsx";

function QuotesList({ searchTerm }) {
  const { quotes } = useContext(QuoteContext);
  //   console.log({ searchTerm, quotes });

  const filteredQuotes = quotes.filter(({ text, author, date, rating }) =>
    (text + author + date + rating + "/5")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const quotesNotFound = filteredQuotes.length === 0;

  // console.log(JSON.stringify(quotes));
  if (!quotes?.length) {
    return (
      <h1>
        There are no quotes to display. Please create one from the navbar.
      </h1>
    );
  }

  return (
    <section>
      <header className="title">
        <h2>Your list of quotes:</h2>
      </header>

      {quotesNotFound ? (
        <p className="quoteNotFoundMessage">Quote not found.</p>
      ) : (
        <ul className="quote-list">
          {filteredQuotes.map((quoteItem) => (
            <Link key={quoteItem.id} to={"/quote/" + quoteItem.id}>
              <QuoteCard quoteElement={quoteItem} />
            </Link>
          ))}
        </ul>
      )}
    </section>
  );
}

export default QuotesList;

QuotesList.propTypes = {
  searchTerm: PropTypes.string,
  quotes: PropTypes.any,
};
