import { quotes } from "../../data/data";
import { useParams, useNavigate } from "react-router-dom";
import './QuoteDetails.css';
import { useEffect } from "react";

export default function QuoteDetails(){
    const { idFromPath } = useParams();
     const selectedQuote = quotes.find((quote) => quote.id === idFromPath);
    console.log({selectedQuote});
    console.log({idFromPath});
    const navigate = useNavigate();

    useEffect(() => {
        if (!selectedQuote) {
        navigate("/");
        }
    }, []);

    if(!selectedQuote){
        return;
    }

    const{imageUrl, text, author, date, rating} = selectedQuote;

    return(
        <section>
           <div className="quote-detail__container">
                <h1 className="quote-detail__title">Quote Details:</h1>
                <img className="quote-detail__image" src={imageUrl} />
                <p className="quote-detail__text">Quote text: {text}</p>
                <p className="quote-detail__author">Author: {author}</p>
                <p className="quote-detail__date">Date: {date}</p>
                <p className="quote-detail__rating">Rating: {rating}</p>
            </div> 
        </section>
    )
}