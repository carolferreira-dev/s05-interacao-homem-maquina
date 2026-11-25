import { useState, useEffect } from 'react';
import TrackList from '../components/tracklist';
import GenreFilter from '../components/genrefilter';
import { 
  fetchTopTracks,
  fetchTracksByGenre, 
  searchTracks,
} from '../services/api';

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState('');
  const [activeGenre, setActiveGenre] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadByGenre(activeGenre)
  }, [activeGenre])

  const loadByGenre = async (genreId) => {
    try {
      setLoading(true)
      setError(null)
      const data = 
        genreId === 0 
          ? await fetchTopTracks() 
          : await fetchTracksByGenre(genreId);
      setTracks(data)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if(!search.trim()){
      loadByGenre(activeGenre);
      return;
    }
    
    try {
      setLoading(true)
      setError(null)
      const data = await searchTracks(search);
      setTracks(data)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleGenreChange = (genreId) => {
    setActiveGenre(genreId);
    setSearch("");
  };

  return (
    <main className="pt-24 max-w-6xl mx-auto px-4 pb-12">
      <form onSubmit = {handleSearch} className="flex gap-2 mb-6" >
        <input
          type="text"
          placeholder="Buscar músicas ou artistas"
          className="w-full bg-slate-800 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-300 placeholder:text-slate-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-400 hover:bg-orange-300 text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
        >
          Buscar
        </button>
      </form>

      <div className="mb-8">
        <GenreFilter 
          activeGenre={activeGenre} 
          onGenreChange={handleGenreChange} />
      </div>

      {loading && ( 
        <p className="mt-6 text-slate-300 text-center">
          Carregando...
        </p>
      )}
      {error && (
        <p className="py-20 text-red-300 text-center">
          {error}
        </p>
      )}
      {!loading && !error && <TrackList tracks={tracks} />}
    </main>
  );
};

export default Home