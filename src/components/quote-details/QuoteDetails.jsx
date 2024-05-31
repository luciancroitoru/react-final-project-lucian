import { quotes } from "../../data/data";
import { useParams, useNavigate } from "react-router-dom";
import './QuoteDetails.css';
import { useEffect, useState } from "react";

async function retrieveQuote(setQuote, quoteId){
    const response = await fetch(`http://localhost:3000/quotes/${quoteId}`);
    const quote = await response.json();

    setQuote(quote);
}

export default function QuoteDetails(){
    const[quote, setQuote] = useState({});
    const { idFromPath } = useParams();
    const selectedQuote = quotes.find((quote) => quote.id === idFromPath);
    console.log({selectedQuote});
    console.log({idFromPath});
    const navigate = useNavigate();

    useEffect(() => {
        // if (!selectedQuote) {
        // navigate("/");
        // }

        retrieveQuote(setQuote, idFromPath);
    }, []);

    useEffect(() => {
        if(!quote){
            navigate('/');
        }
    }, [quote])



    // if(!selectedQuote){
    if(!quote){
        return;
    }

    // const{imageUrl, text, author, date, rating} = selectedQuote;
    const{imageUrl, text, author, date, rating} = quote;

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