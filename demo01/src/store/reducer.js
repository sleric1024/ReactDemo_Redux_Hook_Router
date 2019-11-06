import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes'

const defaultState = {
  inputValue: 'Input something',
  dataList: [
    'Today',
    'Tomorrow',
    'The day after tomorrow'
  ]
}
export default(state = defaultState, action) => {
  // console.log(state, action)

  // Reducer里只能接受state, 不能改变state
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.dataList.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.dataList.splice(action.index, 1);
    return newState;
  }

  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.dataList = action.data.data.listData;
    return newState;
  }

  return state;
}