import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Github extends React.Component {
  render() {
    return (
      <div className="github">
        <h3>Find repos list with exactly Github name</h3>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Github />,
  document.getElementById('root')
);
