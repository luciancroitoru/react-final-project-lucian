/*
 *
 * imageUrl
 * text
 * author
 * date
 * rating
 *
 */

import { Link, useNavigate, useParams } from "react-router-dom";
import "./CreateQuote.css";
import { useContext } from "react";
import { QuoteContext } from "../../App";
import { getQuotesFromServer } from "../../lib/quotes";
import { IoArrowBackOutline } from "react-icons/io5";

export default function CreateQuote() {
  const navigate = useNavigate();
  const { quotes, setQuotes } = useContext(QuoteContext);
  const { idFromPath } = useParams();
  const selectedQuote = quotes.find((quote) => quote.id === idFromPath);

  // onClick handler to perform side effects and navigate back to home
  const handleBackClick = () => {
    // Perform any side effect here (e.g., logging, state update, etc.)
    // console.log('Navigating back to home page');
    navigate("/");
  };

  function saveQuote(event) {
    // Prevents page refresh when form is submitted (Browser default behavior)
    event.preventDefault();
    const formElement = event.target;

    const { text, author, imageUrl, date, rating } = formElement;

    const quote = {
      text: text.value,
      author: author.value,
      imageUrl: imageUrl.value,
      date: date.value,
      rating: rating.value,
    };

    if (idFromPath) {
      fetch(`http://localhost:3000/quotes/${idFromPath}`, {
        method: "PUT",
        body: JSON.stringify(quote),
      }).then(() => getQuotesFromServer(setQuotes));
    } else {
      fetch("http://localhost:3000/quotes", {
        method: "POST",
        body: JSON.stringify(quote),
      }).then(() => {
        navigate("/");
        getQuotesFromServer(setQuotes);
      });

      formElement.reset();
    }
  }

  return (
    <>
      <section className="create-quote-section">
        <div className="create-quote-back-title-container">
        <Link to="/" className="quote-create-back-link">
          <IoArrowBackOutline
            className="quote-detail__back_to_home"
            onClick={handleBackClick}
          />
        </Link>
        <span className="create-page-title">Create your quote below:</span>
        </div>
        <form className="create-form-container" onSubmit={saveQuote}>
          <fieldset className="textarea-container">
            <label htmlFor="text">Quote text</label>
            <textarea
              name="text"
              className="form-input form-textarea"
              id="text"
              type="text"
              required
              minLength={10}
              maxLength={150}
              //  defaultValue={selectedMovie && selectedMovie.title} same as below
              defaultValue={selectedQuote?.text}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="author">Quote author</label>
            <input
              name="author"
              className="form-input form-author"
              id="author"
              type="text"
              required
              minLength={2}
              maxLength={30}
              //  defaultValue={selectedMovie && selectedMovie.title} same as below
              defaultValue={selectedQuote?.text}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="imageUrl">Image Url:</label>
            <input
              name="imageUrl"
              className="form-input form-image-url"
              type="url"
              id="imageUrl"
              required
              defaultValue={selectedQuote?.imageUrl}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="date">Date</label>
            <input
              name="date"
              className="form-input form-date"
              type="date"
              id="date"
              required
              defaultValue={selectedQuote?.date}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="rating">Rating</label>
            <select
              name="rating"
              className="form-input form-rating"
              id="rating"
              required
              defaultValue={selectedQuote?.rating}
            >
              <option value="0">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </fieldset>

          <button className="form-input create-button">Save quote</button>
        </form>
      </section>
    </>
  );
}
