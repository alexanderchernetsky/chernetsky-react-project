import React from 'react';
import Dishes from './Dishes';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  render() {
    return (
        <div className="page-wrapper">
          <div className="store-wrapper">
            <Dishes/>
            <Order/>
            <Inventory/>
          </div>
        </div>
    )
  }
}

export default App;