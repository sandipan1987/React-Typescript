import { Action } from "../actions/index";
import { ActionType } from '../action-type/index'

const initialState = 0;

export const bankReducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.DEPOSIT:
            return state + action.payload;
        case ActionType.WITHDRAW:
            {
                if (action.payload > state) {
                    alert("No money to withdraw");
                    return state;

                } else {
                    return state - action.payload;
                }
            }
        case ActionType.BANKRUPT:
            alert("All your money is gone");
            return 0;
        default:
            return state;
    }
}
