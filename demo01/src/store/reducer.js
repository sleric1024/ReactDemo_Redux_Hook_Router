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
  if (action.type === 'changeListInput') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === 'addItem') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.dataList.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  if (action.type === 'deleteItem') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.dataList.splice(action.index, 1);
    return newState;
  }

  return state;
}