import * as wsActions from '../actions/websocket';

const initialState = {
  logs: {
    list: [],
    count: 0,
    status: 'Not Connected'
  }
}

const admin = (state = initialState, action) => {
  switch (action.type) {
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
      // if (state.logs.list.length > 100) {
      //   let logs = [...state.logs.list.slice(100 - action.message.length)]
      //   return {
      //     ...state,
      //     logs: {

      //     }
      //   }
      // }
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