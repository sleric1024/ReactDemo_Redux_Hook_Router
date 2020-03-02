import {
  GET_LIST,
  CHANGE_INPUT,
  ADD_ITEM,
  DELETE_ITEM
} from '../actionType';

const defaultState = {
  test: []
};

export default(state = defaultState, action) => {
  switch (action.type) {


    default:
      return state;
  }
}