import { GENRES } from '../services/api';

const GenreFilter = ({ activeGenre, onGenreChange }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {GENRES.map(genre => (
        <button
          key={genre.id}
          type="button"
          onClick={() => onGenreChange(genre.id)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activeGenre === genre.id
              ? 'bg-orange-400 text-slate-950'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 cursor-pointer'
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  )
}

export default GenreFilter