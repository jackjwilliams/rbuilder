export const WS_CONNECT = 'WS_CONNECT';
export const WS_CONNECTED = 'WS_CONNECTED';
export const WS_CONNECTING = 'WS_CONNECTING';
export const WS_DISCONNECT = 'WS_DISCONNECT';
export const WS_MESSAGE_RECEIVED = 'WS_MESSAGE_RECEIVED';

export const messageReceived = (message) => {
  return (dispatch, getState) => {
    dispatch({type: WS_MESSAGE_RECEIVED, message});
  }
}

export const wsConnect = (url) => ({type: WS_CONNECT, url});
export const wsConnected = () => ({type: WS_CONNECTED});
export const wsDisconnect = () => ({type: WS_DISCONNECT});
export const wsConnecting = () => ({type: WS_CONNECTING});