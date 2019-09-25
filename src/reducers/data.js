const dataReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_DATA':
      return action.data
    default:
      return state
  }
}

export {dataReducer as default}