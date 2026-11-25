import { Link } from 'react-router-dom'
import { AudioWaveform } from 'lucide-react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center">
        <Link to="/" className="text-xl font-bold text-slate-200 tracking-tight flex gap-2 items-center">
          <AudioWaveform size={32} className="text-orange-500" />
          <span className="text-xl font-bold">Syn Sound</span>
        </Link>
      </div>
    </header>
  )
}

export default Header