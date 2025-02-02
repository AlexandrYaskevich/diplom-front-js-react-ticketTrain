import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const dateFrom = searchParams.get("dateFrom");
  const dateTo = searchParams.get("dateTo");

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return ""; // Return an empty string if dateString is null or undefined
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    } catch (error) {
      console.error("Error parsing date:", error);
      return dateString; // Return the original string on error
    }
  };

  return (
    <div>
      <h2>Search Results</h2>
      <p>
        From: {from}
        <br />
        To: {to}
        <br />
        Date From: {formatDate(dateFrom)}
        <br />
        Date To: {formatDate(dateTo)}
      </p>
    </div>
  );
}

export default SearchResults;
