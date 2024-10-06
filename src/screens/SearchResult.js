import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import searchByTitle from '../services/MovieService';
import Card from '../components/Card';

function SearchResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('search');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {
        const data = await searchByTitle(query);
        if (data) {
          setResults(Array.isArray(data) ? data : [data]);
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
              id={result.id}
              title={result.title}
              image={result.imageSet?.verticalPoster?.w240}
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
