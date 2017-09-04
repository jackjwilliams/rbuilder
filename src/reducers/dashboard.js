import * as a from '../actions/dashboard';

const initalState = {
  npcs: {
    list: [],
    count: 0,
    page: 1,
    filter: '',
    error: '',
    loading: false,
    lastRetrieved: undefined
  },
  players: {
    list: [],
    count: 0,
    page: 1,
    filter: "",
    lastRetrieved: undefined
  },
  items: {
    list: [],
    count: 0,
    page: 1,
    filter: "",
    lastRetrieved: undefined
  },
  rooms: {
    list: [],
    count: 0,
    page: 1,
    filter: "",
    lastRetrieved: undefined
  },
  quests: {
    list: [],
    count: 0,
    page: 1,
    filter: "",
    lastRetrieved: undefined
  },
  areas: {
    list: [],
    count: 0,
    page: 1,
    filter: "",
    lastRetrieved: undefined
  },
  config: {
    staged: {},
    current: {}
  }
}

const dashboard = (state = initalState, action) => {
  switch (action.type) {
    case a.ITEMS_LOAD_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          list: action.payload,
          count: action.payload.length,
          lastRetrieved: action.lastRetrieved
        }
      }
    case a.PLAYERS_LOAD_SUCCESS:
      return {
        ...state,
        players: {
          ...state.players,
          list: action.payload,
          count: action.payload.length,
          lastRetrieved: action.lastRetrieved
        }
      }
    case a.NPCS_LOAD_SUCCESS:
      return {
        ...state,
        npcs: {
          ...state.npcs,
          list: action.payload,
          count: action.payload.length,
          lastRetrieved: action.lastRetrieved
        }
      }
    case a.ROOMS_LOAD_SUCCESS:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          list: action.payload,
          count: action.payload.length,
          lastRetrieved: action.lastRetrieved
        }
      }
    case a.AREAS_LOAD_SUCCESS:
      return {
        ...state,
        areas: {
          ...state.areas,
          list: action.payload,
          count: action.payload.length,
          lastRetrieved: action.lastRetrieved
        }
      }
    case a.QUESTS_LOAD_SUCCESS:
      return {
        ...state,
        quests: {
          ...state.quests,
          list: action.payload,
          count: action.payload.length,
          lastRetrieved: action.lastRetrieved
        }
      }
    case a.NPCS_LOAD_FAILURE: 
      return {
        ...state,
        npcs: {
          ...state.npcs,
          error: action.error.message,
          loading: false
        }
      }
    case a.NPCS_LOAD:
      return {
        ...state,
        npcs: {
          ...state.npcs,
          loading: true
        }
      }
    default:
      return state;
  }
}

export default dashboard;