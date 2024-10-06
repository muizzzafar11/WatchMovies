import './App.css';
import Home from './screens/Home';
import SearchResults from './screens/SearchResult';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
