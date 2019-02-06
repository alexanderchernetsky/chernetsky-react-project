import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

function Welcome(props) {
  return (
      <div className="page-wrapper">
        <Card history={props.history}/>
      </div>
  )
}

Welcome.propTypes = {
  history: PropTypes.object
};

export default Welcome;