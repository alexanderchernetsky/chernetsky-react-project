import React from 'react';
import PropTypes from 'prop-types';

function Login(props) {
  return (
      <div className="store-division inventory">
        <h2 className="store-division__header">Инвентаризация</h2>
        <p className="login__paragraph">Войдите, чтобы управлять магазином:</p>
        <button className="login__button" onClick={props.authenticate}>Войти анонимно</button>
      </div>
  );
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;