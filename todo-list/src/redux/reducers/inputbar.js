import {
  DONE_TEST
} from '../actionType';

const defaultState = {
  test: [1, 2, 3]
};

export default(state = defaultState, action) => {
  switch (action.type) {
    case DONE_TEST: {
      return state;
    }

    default:
      return state;
  }
}