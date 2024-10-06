import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import searchByTitle from '../services/MovieService'; // Import the API call function
import Card from '../components/Card'; // Import the Card component

function SearchResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('search'); // Get the search query from the URL
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {
        const data = await searchByTitle(query);
        if (data) {
          // Assuming the response data is an object for each show
          setResults(data); // Wrap the object in an array to map over it
          console.log({data})
        }
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div>
      <h2>Results for "{query}"</h2>
      <div className="results-list">
        {results.length > 0 ? (
          results.map((result, index) => (
            <Card
              key={index}
              title={result.title}
              image={result.imageSet?.verticalPoster?.w240} // Use the vertical poster image
              overview={result.overview}
              releaseYear={result.releaseYear}
              rating={result.rating}
            />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
