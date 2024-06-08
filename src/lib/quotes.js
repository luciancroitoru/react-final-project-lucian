export async function getQuotesFromServer(setQuotes, accessToken, navigate) {
  const response = await fetch("http://localhost:3000/quotes"
    , {
    headers: {
      // Authorization: `Bearer ${accessToken}`,
      Accept: `application/json`,
    },
  }
);
  const quotesFromServer = await response.json();

  if (response.ok) {
    setQuotes(quotesFromServer);
  }

  if (response.status === 401) {
    navigate(`/login`);
  }
}
