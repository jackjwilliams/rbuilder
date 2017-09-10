const initialState = {
  fetching: 0,
  errors: []
}

const ui = (state = initialState, action) => {
  const isLoad = action.type.endsWith('_LOAD');
  const isSuccess = action.type.endsWith('_SUCCESS');
  const isFailure = action.type.endsWith('_FAILURE');
  if (isLoad) {
    return {
      ...state,
      fetching: state.fetching + 1
    }
  } else if (isSuccess) {
    return {
      ...state,
      fetching: state.fetching - 1
    }
  } else if (isFailure) {
    return {
      ...state,
      fetching: state.fetching - 1,
      errors: [...state.errors, action.error.message]
    }
  } else {
    return state;
  }
}

export default ui;