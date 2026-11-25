import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Pause } from 'lucide-react';
import { fetchTrackById, fetchArtistTopTracks } from '../services/api';
import TrackCard from '../components/trackcard';

const TrackDetail = () => {
  const { id } = useParams();
  const [track, setTrack] = useState(null);
  const [related, setRelated] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const audioRef = useRef();

  useEffect(() => {
    const loadTrack = async () => {
      try {
        setLoading(true);
        setError(null);
        setPlaying(false);

        const data = await fetchTrackById(id);
        if (data.error) throw new Error('Música não encontrada')
        setTrack(data);

        const artistTracks = await fetchArtistTopTracks(data.artist.id)
        setRelated(
          artistTracks.filter((t) => t.id !== data.id).slice(0, 5)
        );
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadTrack()
  }, [id])

  useEffect(() => {
    if (audioRef.current)
      audioRef.current.volume = volume;
  }, [volume])

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing);
  };

  if (loading) {
    return (
      <main className="pt-24 max-w-6xl mx-auto px-4">
        <p className="text-slate-300 text-center">Carregando...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="pt-24 max-w-6xl mx-auto px-4">
        <p className="text-red-400 text-center">{error}</p>
      </main>
    )
  }

  const cover = track.album?.cover_big || track.album?.cover_medium
  const duration = track.duration
    ? `${Math.floor(track.duration / 60)}:${String(track.duration % 60).padStart(2, '0')}`
    : null

  return (
    <main className="pt-24 pb-12 max-w-6xl mx-auto px-4">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-orange-400 transition-colors"
      >
        <ArrowLeft size={16} />
        Voltar
      </Link>

      <section className="mt-6 flex flex-col md:flex-row gap-8">
        {cover && (
          <img
            src={cover}
            alt={`Capa de ${track.album?.title}`}
            className="w-full max-w-sm aspect-square object-cover rounded-xl"
          />
        )}

        <div className="flex-1">
          <p className="text-sm text-slate-400">{track.album?.title}</p>
          <h1 className="mt-1 text-3xl font-bold text-slate-100">{track.title}</h1>
          <p className="mt-2 text-rose-400">{track.artist?.name}</p>
          {duration && <p className="mt-1 text-sm text-slate-500">{duration}</p>}

          {track.preview && (
            <div className="mt-6">
              <p className="text-sm text-slate-400">Preview de 30 segundos</p>

              <audio
                ref={audioRef}
                src={track.preview}
                onEnded={() => setPlaying(false)}
                onLoadedMetadata={() => { audioRef.current.volume = volume }}
              />

              <div className="mt-3 flex items-center gap-4">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={playing ? 'Pausar' : 'Tocar'}
                  className="w-12 h-12 rounded-full bg-orange-400 hover:bg-orange-300 text-slate-950 flex items-center justify-center cursor-pointer transition-colors"
                >
                  {playing ? <Pause size={22} /> : <Play size={22} />}
                </button>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  aria-label="Volume"
                  className="volume-slider w-32 h-1.5 rounded-full"
                  style={{
                    background: `linear-gradient(to right, #fb923c ${volume * 100}%, #334155 ${volume * 100}%)`,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-100">
            Mais de {track.artist?.name}
          </h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {related.map(t => (
              <TrackCard key={t.id} track={t} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

export default TrackDetail
