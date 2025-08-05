import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '@/assets/css/base/index.scss';
import '@/assets/css/component/button.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        app
      </div>
    </Router>
  );
};

export default App; 