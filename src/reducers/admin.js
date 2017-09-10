import * as wsActions from '../actions/websocket';
import * as adminActions from '../actions/admin';

const initialState = {
  logs: {
    list: [],
    count: 0,
    status: 'Not Connected'
  },
  config: {}
}

const admin = (state = initialState, action) => {
  switch (action.type) {
    case adminActions.CONFIG_LOAD_SUCCESS: 
      return {
        ...state,
        config: action.config
      }
    case wsActions.WS_CONNECT:
      return {
        ...state,
        logs: {
          ...state.logs,
          status: 'Connecting ...'
        }
      }
    case wsActions.WS_CONNECTED:
      return {
        ...state,
        logs: {
          ...state.logs,
          status: 'Connected'
        }
      }
    case wsActions.WS_DISCONNECT:
      return {
        ...state,
        logs: {
          ...state.logs,
          status: 'Not Connected'
        }
      }
    case wsActions.WS_MESSAGE_RECEIVED:
      let logs = state.logs.list.length + action.message.length > 50 ? [...state.logs.list.slice(state.logs.list.length - 50, state.logs.list.length)] : [...state.logs.list, ...action.message];
      return {
        ...state,
        logs: {
          ...state.logs,
          list: logs,
          count: logs.length
        }
      }
    default:
      return state;
  }
}

export default admin;