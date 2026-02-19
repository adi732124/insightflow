import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Dashboard from './pages/Dashboard';
import ScreenDetail from './pages/ScreenDetail';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/screen/:id" element={<ScreenDetail />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;