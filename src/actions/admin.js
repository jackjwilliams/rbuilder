import api from '../api';

export const CONFIG_LOAD = 'CONFIG_LOAD';
export const CONFIG_LOAD_SUCCESS = 'CONFIG_LOAD_SUCCESS';
export const CONFIG_LOAD_FAILURE = 'CONFIG_LOAD_FAILURE';

export const CONFIG_SAVE = 'CONFIG_SAVE';
export const CONFIG_SAVE_SUCCESS = 'CONFIG_SAVE_SUCCESS';
export const CONFIG_SAVE_FAILURE = 'CONFIG_SAVE_FAILURE';

export const loadConfig = () => {
  return (dispatch, getState) => {
    dispatch({type: CONFIG_LOAD });
    return api.Config.get()
      .then(x => dispatch({type: CONFIG_LOAD_SUCCESS, config: x.data }))
      .catch(error => dispatch({type: CONFIG_LOAD_FAILURE, error}));
  }
}

export const saveConfig = (config) => {
  return (dispatch, getState) => {
    dispatch({type: CONFIG_SAVE });
    return api.Config.save(config)
      .then(x => dispatch({ type: CONFIG_SAVE_SUCCESS, config }))
      .catch(error => dispatch({type: CONFIG_SAVE_FAILURE, error }));
  }
}