import { AudioWaveform } from 'lucide-react'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <AudioWaveform size={48} className="text-orange-500" />
      <h1 className="text-3xl font-bold text-white">Olá, mundo!</h1>
    </div>
  )
}

export default App