import api from '../api';
import { DASHBOARD_INVALIDATE_SECONDS } from '../constants';
import { DiffInSeconds } from '../utils';
export const NPCS_LOAD              = "NPCS_LOAD";
export const NPCS_LOAD_SUCCESS      = "NPCS_LOAD_SUCESS";
export const NPCS_LOAD_FAILURE      = "NPCS_LOAD_FAILURE";

export const PLAYERS_LOAD           = "PLAYERS_LOAD";
export const PLAYERS_LOAD_SUCCESS   = "PLAYERS_LOAD_SUCCESS";
export const PLAYERS_LOAD_FAILURE   = "PLAYERS_LOAD_FAILURE";

export const ITEMS_LOAD             = "ITEMS_LOAD";
export const ITEMS_LOAD_SUCCESS     = "ITEMS_LOAD_SUCCESS";
export const ITEMS_LOAD_FAILURE     = "ITEMS_LOAD_FAILURE";

export const ROOMS_LOAD             = "ROOMS_LOAD";
export const ROOMS_LOAD_SUCCESS     = "ROOMS_LOAD_SUCCESS";
export const ROOMS_LOAD_FAILURE     = "ROOMS_LOAD_FAILURE";

export const AREAS_LOAD             = "AREAS_LOAD";
export const AREAS_LOAD_SUCCESS     = "AREAS_LOAD_SUCCESS";
export const AREAS_LOAD_FAILURE     = "AREAS_LOAD_FAILURE";

export const QUESTS_LOAD             = "QUESTS_LOAD";
export const QUESTS_LOAD_SUCCESS     = "QUESTS_LOAD_SUCCESS";
export const QUESTS_LOAD_FAILURE     = "QUESTS_LOAD_FAILURE";

export const CONFIG_LOAD            = "CONFIG_LOAD";
export const CONFIG_LOAD_SUCCESS    = "CONFIG_LOAD_SUCCESS";
export const CONFIG_LOAD_FAILURE    = "CONFIG_LOAD_FAILURE";

export const CONFIG_UPDATE          = "CONFIG_UPDATE";
export const CONFIG_UPDATE_SUCCESS  = "CONFIG_UPDATE_SUCCESS";
export const CONFIG_UPDATE_FAILURE  = "CONFIG_UPDATE_FAILURE";

const shouldUpdate = (lastRetrieved) => {
  let now = Date.now();
  let diff = DiffInSeconds(lastRetrieved, now, DASHBOARD_INVALIDATE_SECONDS);
  let shouldUpdate = diff >= DASHBOARD_INVALIDATE_SECONDS;
  console.log(diff);
  console.log(shouldUpdate);
  return shouldUpdate;
}

export const loadQuests = () => {
  return (dispatch, getState) => {
    const { lastRetrieved } = getState().dashboard.quests;
    if (shouldUpdate(lastRetrieved)) {
      dispatch({type: QUESTS_LOAD});
      return api.Quests.all()
        .then(x => dispatch({type: QUESTS_LOAD_SUCCESS, payload: x.data.quests, lastRetrieved: Date.now()}))
        .catch(error => dispatch({type: QUESTS_LOAD_FAILURE, error: error}))
    }
  }
}

export const loadNpcs = () => {
  return (dispatch, getState) => {
    const { lastRetrieved } = getState().dashboard.npcs;
    if (shouldUpdate(lastRetrieved)) {
      dispatch({type: NPCS_LOAD});
      return api.Npcs.all()
        .then(x => dispatch({type: NPCS_LOAD_SUCCESS, payload: x.data.entities, lastRetrieved: Date.now()}))
        .catch(error => dispatch({type: NPCS_LOAD_FAILURE, error: error}))
    }
  }
}

export const loadPlayers = () => {
  return (dispatch, getState) => {
    const { lastRetrieved } = getState().dashboard.players;
    if (shouldUpdate(lastRetrieved)) {
      dispatch({type: PLAYERS_LOAD});
      return api.Players.all()
        .then(x =>dispatch({type: PLAYERS_LOAD_SUCCESS, payload: x.data.players, lastRetrieved: Date.now()}))
        .catch(error => dispatch({type: PLAYERS_LOAD_FAILURE, error: error}))
    }
    
  }
}

export const loadItems = () => {
  return (dispatch, getState) => {
    const { lastRetrieved } = getState().dashboard.items;
    if (shouldUpdate(lastRetrieved)) {
      dispatch({type: ITEMS_LOAD});
      return api.Items.all()
        .then(x => dispatch({type: ITEMS_LOAD_SUCCESS, payload: x.data.items, lastRetrieved: Date.now()}))
        .catch(error => dispatch({type: ITEMS_LOAD_FAILURE, error: error}))
    }
    
  }
}

export const loadRooms = () => {
  return (dispatch, getState) => {
    const { lastRetrieved } = getState().dashboard.rooms;
    if (shouldUpdate(lastRetrieved)) { 
      dispatch({type: ROOMS_LOAD});
      return api.Rooms.all()
        .then(x => dispatch({type: ROOMS_LOAD_SUCCESS, payload: x.data.rooms, lastRetrieved: Date.now()}))
        .catch(error => dispatch({type: ROOMS_LOAD_FAILURE, error: error}))
    }
  }
}

export const loadAreas = () => {
  return (dispatch, getState) => {
    const { lastRetrieved } = getState().dashboard.areas;
    if (shouldUpdate(lastRetrieved)) {
      dispatch({type: AREAS_LOAD});
      return api.Areas.all()
        .then(x => dispatch({type: AREAS_LOAD_SUCCESS, payload: x.data.areas, lastRetrieved: Date.now()}))
        .catch(error => dispatch({type: AREAS_LOAD_FAILURE, error: error}))
    }
  }
}