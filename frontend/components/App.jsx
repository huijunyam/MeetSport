import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header className="main-nav">
      <Link to="/" className="header-link">
        <h1>meetsport</h1>
      </Link>
    </header>
    {children}
  </div>
);

export default App;
