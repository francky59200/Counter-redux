import * as comptConst from "../const/compteur.const";

export const incrementer = () => ({
  type: comptConst.COMPT_INCREMENTER
});
export const decrementer = () => ({
  type: comptConst.COMPT_DECREMENTER
});
