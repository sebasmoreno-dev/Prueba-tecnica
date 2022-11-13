import React from "react";

const Quote = ({ quote }) => {
  return (
    <div>
      <h3>
        {quote.text}
        <span> - {quote.author}</span>
      </h3>
    </div>
  );
};

export default Quote;
