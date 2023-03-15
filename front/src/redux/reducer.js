// TODO: ADD YOUR REDUCER HERE

// Here is an example of a reducer but you don't have to use it
import { INCREMENT, DECREMENT } from "./action";

const initialState = {
    count: 0,
};

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
      case INCREMENT:
        return { count: state.count + 1 };
      case DECREMENT:
        return { count: state.count - 1 };
      default:
        return state;
    }
}