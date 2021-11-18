import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = () => {
  const addQuoteHandler = (newQuote) => {
    console.log(newQuote);
  };
  return (
    <div>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
};

export default NewQuotes;
