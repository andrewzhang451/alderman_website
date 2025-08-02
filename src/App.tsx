// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Gallery from './pages/Gallery';
import Ward_Map from './pages/Ward_Map';
import Endorsement from './pages/Our_Mission/Endorsement';
import Staff from './pages/About/Staff';
import Email from './pages/Connect/Email';
import Resources from './pages/Connect/Resources';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Ward_Map" element={<Ward_Map />} />
        <Route path="/Our_Mission/Endorsement" element={<Endorsement />} />
        <Route path="/About/Staff" element={<Staff />} />
        <Route path="/Connect/Email" element={<Email />} />
        <Route path="/Connect/Resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App