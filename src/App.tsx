import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatDashboard from '@/pages/ChatDashboard';
import '@/assets/css/base/index.scss';
import '@/assets/css/component/button.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<ChatDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 