import PropTypes from "prop-types";
import "./QuoteCard.css";

function QuoteCard({ quoteElement }) {
  const { id, imageUrl, text, author, date, rating } = quoteElement;

  return (
    <li className="quote" key={id}>
      <div className="image-container">
        <img className="quote__image" src={imageUrl} />
        <div className="quote-container">
          <h4 className="quote__text">{text}</h4>
          <span className="quote__author">{author}</span>
        </div>
      </div>
      <div className="date-rating-container">
        <span className="quote__date">Date: {date}</span>
        <span className="quote__rating">Rating: {rating}/5</span>
      </div>
      <div className="quote__bookmark">
        <i className="quote_bookmark-icon"></i>
      </div>
    </li>
  );
}

export default QuoteCard;

QuoteCard.propTypes = {
  quoteElement: PropTypes.shape({
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    text: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.any,
    rating: PropTypes.any,
    bookmark: PropTypes.any,
  }),
};
