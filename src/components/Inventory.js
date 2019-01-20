import React from 'react';
import AddDishForm from './AddDishForm';
import EditDishForm from './EditDishForm';
import PropTypes from 'prop-types';
import Login from './Login';
import firebase from "firebase";
import {firebaseApp} from "../base";

class Inventory extends React.Component {
  static propTypes = {
    dishes: PropTypes.object,
    deleteDish: PropTypes.func,
    updateDish: PropTypes.func
  };

  state = {
    signedIn: false,
  };

  authHandler = () => {
    alert('handler works!');

  };

  authenticate = () => {
    alert('authenticate works!');
    firebaseApp.auth().signInAnonymously();
    firebaseApp.auth().onAuthStateChanged(function(user) {
      alert('onAuthStateChangedWorks!');

      console.log(user);
      /*if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        // ...
      } else {
        // User is signed out.
        // ...
      }
      // ...*/
    });
    this.setState({ signedIn: true});
  };

  logOut = async () => {
    alert('logOut works!');
    await firebase.auth().signOut();
    this.setState({signedIn: false});
  };

  render() {
    if (!this.state.signedIn) {
      return <Login authenticate={this.authenticate} logOut={this.logOut}/>;
    }
    return (
        <div className="store-division inventory">
          <h2 className="store-division__header">Инвентаризация</h2>
          <button className="logout__button" onClick={this.logOut}>Выйти</button>
          {Object.keys(this.props.dishes).map(key =>
              <EditDishForm key={key} index={key} dishes={this.props.dishes} deleteDish={this.props.deleteDish} updateDish={this.props.updateDish}/>)}
          <AddDishForm addDish={this.props.addDish}/>
          <button className="load__button" onClick={this.props.loadSampleDishes}>Загрузить шаблонные блюда</button>

        </div>
    )
  }
}

export default Inventory;