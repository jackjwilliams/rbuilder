import * as a from '../actions';

const initialState = {
  fetching: 0,
  errors: []
}

const ui = (state = initialState, action) => {
  switch (action.type) {
    case a.CONFIG_LOAD:
    case a.ITEMS_LOAD:
    case a.CONFIG_UPDATE:
    case a.PLAYERS_LOAD:
    case a.ROOMS_LOAD:
    case a.NPCS_LOAD:
    case a.AREAS_LOAD:
    case a.QUESTS_LOAD:
      return {
        ...state,
        fetching: state.fetching + 1
      }
    case a.CONFIG_LOAD_SUCCESS:
    case a.CONFIG_UPDATE_SUCCESS:
    case a.ITEMS_LOAD_SUCCESS:
    case a.NPCS_LOAD_SUCCESS:
    case a.PLAYERS_LOAD_SUCCESS:
    case a.ROOMS_LOAD_SUCCESS:
    case a.AREAS_LOAD_SUCCESS:
    case a.QUESTS_LOAD_SUCCESS:
      return {
        ...state,
        fetching: state.fetching - 1
      }
    case a.CONFIG_LOAD_FAILURE:
    case a.CONFIG_UPDATE_FAILURE:
    case a.ITEMS_LOAD_FAILURE:
    case a.NPCS_LOAD_FAILURE:
    case a.PLAYERS_LOAD_FAILURE:
    case a.ROOMS_LOAD_FAILURE:
    case a.AREAS_LOAD_FAILURE:
    case a.QUESTS_LOAD_FAILURE:
      return {
        ...state,
        fetching: state.fetching - 1,
        errors: [...state.errors, action.error.message]
      }
    default:
      return state;
  }
}

export default ui;