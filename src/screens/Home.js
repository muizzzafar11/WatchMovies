import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('title'); // Default to 'title'
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Pass both query and searchType in the URL
      navigate(`/results?search=${query}&type=${searchType}`);
    }
  };

  return (
    <div className="home">
      <h1>Search for Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        
        {/* Dropdown for selecting search type */}
        <select 
          value={searchType} 
          onChange={(e) => setSearchType(e.target.value)}
          style={{ marginLeft: '10px' }} // Optional: spacing for dropdown
        >
          <option value="title">Title</option>
          <option value="actor">Actor</option>
          <option value="rating">Rating</option>
          <option value="genre">Genre</option>
        </select>

        <button type="submit" style={{ marginLeft: '10px' }}>Search</button>
      </form>
    </div>
  );
}

export default Home;
