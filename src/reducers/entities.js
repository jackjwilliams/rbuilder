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
    countLive: 0,
    countAll: 0,
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

const entities = (state = initalState, action) => {
  switch (action.type) {
    case a.ITEMS_COUNT_LOAD_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          count: action.payload,
          lastRetrieved: action.lastRetrieved
        }
      }
    case a.LIVE_PLAYERS_COUNT_LOAD_SUCCESS:
      return {
        ...state,
        players: {
          ...state.players,
          countLive: action.payload,
          lastRetrieved: action.lastRetrieved
        }
      }
    case a.PLAYERS_COUNT_LOAD_SUCCESS:
      return {
        ...state,
        players: {
          ...state.players,
          countAll: action.payload,
          lastRetrieved: action.lastRetrieved
        }
      }
    case a.NPCS_COUNT_LOAD_SUCCESS:
      return {
        ...state,
        npcs: {
          ...state.npcs,
          count: action.payload,
          lastRetrieved: action.lastRetrieved
        }
      }
    case a.ROOMS_COUNT_LOAD_SUCCESS:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          count: action.payload,
          lastRetrieved: action.lastRetrieved
        }
      }
    case a.AREAS_COUNT_LOAD_SUCCESS:
      return {
        ...state,
        areas: {
          ...state.areas,
          count: action.payload,
          lastRetrieved: action.lastRetrieved
        }
      }
    case a.QUESTS_COUNT_LOAD_SUCCESS:
      return {
        ...state,
        quests: {
          ...state.quests,
          count: action.payload,
          lastRetrieved: action.lastRetrieved
        }
      }
    default:
      return state;
  }
}

export default entities;