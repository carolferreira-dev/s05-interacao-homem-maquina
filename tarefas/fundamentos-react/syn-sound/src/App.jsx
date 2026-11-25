import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import TrackDetail from './pages/trackdetail'
import Header from './components/header'

const App = () => {

  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track/:id" element={<TrackDetail />} />
      </Routes>
    </>
  );
};
export default App