export async function getQuotesFromServer(setQuotes) {
    const response = await fetch("http://localhost:3000/quotes");
    const quotesFromServer = await response.json();
  
    setQuotes(quotesFromServer);
  }