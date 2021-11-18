import React from "react";
import { useParams } from "react-router";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Tom", text: "Learning React is great!" },
];

const QuotesDetails = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quotesId);

  if (!quote) {
    return <p>No quotes found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quotesId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuotesDetails;
