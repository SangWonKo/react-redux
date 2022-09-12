import { DECREASE, INCREASE, RESET } from "./action_type.js";
import { actionCreator } from "./redux.js";

export const increase = actionCreator(INCREASE);
export const decrease = actionCreator(DECREASE);
export const reset = actionCreator(RESET);
