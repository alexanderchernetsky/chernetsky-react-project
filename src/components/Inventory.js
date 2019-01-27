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
    updateDish: PropTypes.func,
    loadSampleDishes: PropTypes.func,
  };

  state = {
    signedIn: false,
    uid: null,
  };

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged( user => {
      if (user) {
        this.setState({signedIn: true, uid: user.uid})
      }
    });
  }

  authenticate = async () => {
    await firebaseApp.auth().signInAnonymously();
  };

  logOut = async () => {
    await firebase.auth().signOut();
    this.setState({signedIn: false, uid: null});
  };

  render() {
    if (!this.state.signedIn) {
      return <Login authenticate={this.authenticate}/>;
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