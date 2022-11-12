import React from "react";

const Quote = ({ quote }) => {
  return (
    <div>
      <p>
        {quote.text}
        <span>- {quote.author}</span>
      </p>
    </div>
  );
};

export default Quote;
