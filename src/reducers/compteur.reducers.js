import * as compteurConst from "../const/compteur.const";

const initState = {
  numbers: 25,
  numbersCompteur: 0
};

const compteurReducers = (state = initState, action) => {
  switch (action.type) {
    case compteurConst.COMPT_INCREMENTER:
      return { ...state, numbersCompteur: state.numbersCompteur + 1 };
    case compteurConst.COMPT_DECREMENTER:
      return { ...state, numbersCompteur: state.numbersCompteur - 1 };
    default:
      return state;
  }
};

export default compteurReducers;
