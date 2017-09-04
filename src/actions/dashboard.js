import api from '../api';

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

export const CONFIG_LOAD            = "CONFIG_LOAD";
export const CONFIG_LOAD_SUCCESS    = "CONFIG_LOAD_SUCCESS";
export const CONFIG_LOAD_FAILURE    = "CONFIG_LOAD_FAILURE";

export const CONFIG_UPDATE          = "CONFIG_UPDATE";
export const CONFIG_UPDATE_SUCCESS  = "CONFIG_UPDATE_SUCCESS";
export const CONFIG_UPDATE_FAILURE  = "CONFIG_UPDATE_FAILURE";

export const loadNpcs = () => {
  return dispatch => {
    dispatch({type: NPCS_LOAD});
    return api.NPCS.all()
      .then(x => dispatch({type: NPCS_LOAD_SUCCESS, payload: x.data.entities}))
      .catch(error => dispatch({type: NPCS_LOAD_FAILURE, error: error}))
  }
}