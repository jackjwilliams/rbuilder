import * as a from '../actions/dashboard';

const initalState = {
  npcs: {
    list: [],
    count: 1,
    page: 1,
    filter: '',
    error: ''
  },
  players: {
    list: [],
    count: 1,
    page: 1,
    filter: ""
  },
  items: {
    list: [],
    count: 1,
    page: 1,
    filter: ""
  },
  rooms: {
    list: [],
    count: 1,
    page: 1,
    filter: ""
  },
  config: {
    staged: {},
    current: {}
  }
}

const dashboard = (state = initalState, action) => {
  switch (action.type) {
    case a.NPCS_LOAD_SUCCESS:
      return {
        ...state,
        npcs: {
          ...state.npcs,
          list: action.payload,
          count: action.payload.length
        }
      }
    case a.NPCS_LOAD_FAILURE: {
      return {
        ...state,
        npcs: {
          ...state.npcs,
          error: action.error.message
        }
      }
    }
    default:
      return state;
  }
}

export default dashboard;