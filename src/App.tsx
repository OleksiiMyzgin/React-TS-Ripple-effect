import React from 'react';
import './App.css';

import { Ripple } from './RippleButton'
import { Button } from './RippleButton/styles'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Button>
            Learn React
            <Ripple duration={850} color="#fff"/>
          </Button>

          <Button>
            Learn React
            <Ripple duration={1000} color="#fff"/>
          </Button>

          <Button>
            Learn React
            <Ripple duration={2000} color="black"/>
          </Button>
      </header>
    </div>
  );
}

export default App;
