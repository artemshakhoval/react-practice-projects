import React from "react";
import { useParams } from "react-router";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuotesDetails = () => {
  const params = useParams();

  return (
    <>
      <div>Quotes Details</div>
      <p>{params.quotesId}</p>
      <Route path={`/quotes/${params.quotesId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuotesDetails;
