import React from "react";
import { connect } from "react-redux";

import { incrementer, decrementer } from "../actions/compteur.actions";

const Compteur = props => {
  return (
    <div>
      <h3>My Counter</h3>
      <p>Numbers: {props.numbers}</p>
      <p>Display Count: {props.numbersCompteur}</p>
      {props.numbersCompteur < props.numbers ? (
        <button onClick={() => props.incrementer()}>Increment</button>
      ) : (
        "il ya plus rien"
      )}
      {props.numbersCompteur > 0 ? (
        <button onClick={() => props.decrementer()}>Decrement</button>
      ) : (
        "thanks"
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  numbers: state.compteurReducers.numbers,
  numbersCompteur: state.compteurReducers.numbersCompteur
});

const mapDispatchToProps = dispatch => ({
  incrementer: () => dispatch(incrementer()),
  decrementer: () => dispatch(decrementer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Compteur);
