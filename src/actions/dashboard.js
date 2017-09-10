import api from '../api';
import { DASHBOARD_INVALIDATE_SECONDS } from '../constants';
import { DiffInSeconds } from '../utils';

export const NPCS_COUNT_LOAD              = "NPCS_COUNT_LOAD";
export const NPCS_COUNT_LOAD_SUCCESS      = "NPCS_COUNT_LOAD_SUCCESS";
export const NPCS_COUNT_LOAD_FAILURE      = "NPCS_COUNT_LOAD_FAILURE";

export const LIVE_PLAYERS_COUNT_LOAD           = "LIVE_PLAYERS_COUNT_LOAD";
export const LIVE_PLAYERS_COUNT_LOAD_SUCCESS   = "LIVE_PLAYERS_COUNT_LOAD_SUCCESS";
export const LIVE_PLAYERS_COUNT_LOAD_FAILURE   = "LIVE_PLAYERS_COUNT_LOAD_FAILURE";

export const PLAYERS_COUNT_LOAD           = "PLAYERS_COUNT_LOAD";
export const PLAYERS_COUNT_LOAD_SUCCESS   = "PLAYERS_COUNT_LOAD_SUCCESS";
export const PLAYERS_COUNT_LOAD_FAILURE   = "PLAYERS_COUNT_LOAD_FAILURE";

export const ITEMS_COUNT_LOAD             = "ITEMS_COUNT_LOAD";
export const ITEMS_COUNT_LOAD_SUCCESS     = "ITEMS_COUNT_LOAD_SUCCESS";
export const ITEMS_COUNT_LOAD_FAILURE     = "ITEMS_COUNT_LOAD_FAILURE";

export const ROOMS_COUNT_LOAD             = "ROOMS_COUNT_LOAD";
export const ROOMS_COUNT_LOAD_SUCCESS     = "ROOMS_COUNT_LOAD_SUCCESS";
export const ROOMS_COUNT_LOAD_FAILURE     = "ROOMS_COUNT_LOAD_FAILURE";

export const AREAS_COUNT_LOAD             = "AREAS_COUNT_LOAD";
export const AREAS_COUNT_LOAD_SUCCESS     = "AREAS_COUNT_LOAD_SUCCESS";
export const AREAS_COUNT_LOAD_FAILURE     = "AREAS_COUNT_LOAD_FAILURE";

export const QUESTS_COUNT_LOAD            = "QUESTS_COUNT_LOAD";
export const QUESTS_COUNT_LOAD_SUCCESS    = "QUESTS_COUNT_LOAD_SUCCESS";
export const QUESTS_COUNT_LOAD_FAILURE    = "QUESTS_COUNT_LOAD_FAILURE";

export const CONFIG_LOAD                  = "CONFIG_LOAD";
export const CONFIG_LOAD_SUCCESS          = "CONFIG_LOAD_SUCCESS";
export const CONFIG_LOAD_FAILURE          = "CONFIG_LOAD_FAILURE";

export const CONFIG_UPDATE                = "CONFIG_UPDATE";
export const CONFIG_UPDATE_SUCCESS        = "CONFIG_UPDATE_SUCCESS";
export const CONFIG_UPDATE_FAILURE        = "CONFIG_UPDATE_FAILURE";

const shouldUpdate = (lastRetrieved) => {
  let now = Date.now();
  let diff = DiffInSeconds(lastRetrieved, now, DASHBOARD_INVALIDATE_SECONDS);
  let shouldUpdate = diff >= DASHBOARD_INVALIDATE_SECONDS;
  return shouldUpdate;
}

export const loadQuests = (forced) => {
  return (dispatch, getState) => {
    const { lastRetrieved } = getState().entities.quests;
    if (shouldUpdate(lastRetrieved) || forced) {
      dispatch({type: QUESTS_COUNT_LOAD});
      return api.Quests.count()
        .then(x => dispatch({type: QUESTS_COUNT_LOAD_SUCCESS, payload: x.data.count, lastRetrieved: Date.now()}))
        .catch(error => dispatch({type: QUESTS_COUNT_LOAD_FAILURE, error: error}))
    }
  }
}

export const loadNpcs = (forced) => {
  return (dispatch, getState) => {
    const { lastRetrieved } = getState().entities.npcs;
    if (shouldUpdate(lastRetrieved) || forced) {
      dispatch({type: NPCS_COUNT_LOAD});
      return api.Npcs.count()
        .then(x => dispatch({type: NPCS_COUNT_LOAD_SUCCESS, payload: x.data.count, lastRetrieved: Date.now()}))
        .catch(error => dispatch({type: NPCS_COUNT_LOAD_FAILURE, error: error}))
    }
  }
}

export const loadLivePlayers = (forced) => {
  return (dispatch, getState) => {
    const { lastRetrieved } = getState().entities.players;
    if (shouldUpdate(lastRetrieved) || forced) {
      dispatch({type: LIVE_PLAYERS_COUNT_LOAD});
      return api.Players.count()
        .then(x =>dispatch({type: LIVE_PLAYERS_COUNT_LOAD_SUCCESS, payload: x.data.count, lastRetrieved: Date.now()}))
        .catch(error => dispatch({type: LIVE_PLAYERS_COUNT_LOAD_FAILURE, error: error}))
    }
    
  }
}

export const loadPlayers = (forced) => {
  return (dispatch, getState) => {
    const { lastRetrieved } = getState().entities.players;
    if (shouldUpdate(lastRetrieved) || forced) {
      dispatch({type: PLAYERS_COUNT_LOAD});
      return api.Data.count('player')
        .then(x =>dispatch({type: PLAYERS_COUNT_LOAD_SUCCESS, payload: x.data.count, lastRetrieved: Date.now()}))
        .catch(error => dispatch({type: PLAYERS_COUNT_LOAD_FAILURE, error: error}))
    }
    
  }
}

export const loadItems = (forced) => {
  return (dispatch, getState) => {
    const { lastRetrieved } = getState().entities.items;
    if (shouldUpdate(lastRetrieved) || forced) {
      dispatch({type: ITEMS_COUNT_LOAD});
      return api.Items.count()
        .then(x => dispatch({type: ITEMS_COUNT_LOAD_SUCCESS, payload: x.data.count, lastRetrieved: Date.now()}))
        .catch(error => dispatch({type: ITEMS_COUNT_LOAD_FAILURE, error: error}))
    }
    
  }
}

export const loadRooms = (forced) => {
  return (dispatch, getState) => {
    const { lastRetrieved } = getState().entities.rooms;
    if (shouldUpdate(lastRetrieved) || forced) { 
      dispatch({type: ROOMS_COUNT_LOAD});
      return api.Rooms.count()
        .then(x => dispatch({type: ROOMS_COUNT_LOAD_SUCCESS, payload: x.data.count, lastRetrieved: Date.now()}))
        .catch(error => dispatch({type: ROOMS_COUNT_LOAD_FAILURE, error: error}))
    }
  }
}

export const loadAreas = (forced) => {
  return (dispatch, getState) => {
    const { lastRetrieved } = getState().entities.areas;
    if (shouldUpdate(lastRetrieved) || forced) {
      dispatch({type: AREAS_COUNT_LOAD});
      return api.Areas.count()
        .then(x => dispatch({type: AREAS_COUNT_LOAD_SUCCESS, payload: x.data.count, lastRetrieved: Date.now()}))
        .catch(error => dispatch({type: AREAS_COUNT_LOAD_FAILURE, error: error}))
    }
  }
}