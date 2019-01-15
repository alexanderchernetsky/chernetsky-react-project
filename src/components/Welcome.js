import React from 'react';
import Card from './Card';

function Welcome(props) {
  return (
      <div className="page-wrapper">
        <h1 className="header">Alexander's pizza</h1>
        <Card history={props.history}/>
      </div>
  )
}

export default Welcome;