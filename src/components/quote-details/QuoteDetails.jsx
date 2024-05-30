import { quotes } from "../../data/data";
import { useParams } from "react-router-dom";

export default function QuoteDetails(){
    const { idFromPath } = useParams();

    const selectedQuote = quotes.find((quote) => quote.id === idFromPath);
    console.log(selectedQuote);
    console.log({idFromPath});

    return(
        <h1>I am a movie</h1>
    )
}