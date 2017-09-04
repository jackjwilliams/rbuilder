import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import Inspector from 'redux-devtools-inspector';
import DiffMonitor from 'redux-devtools-diff-monitor';
export default createDevTools(
	<DockMonitor toggleVisibilityKey="ctrl-h"
	           changePositionKey="ctrl-y"
						 changeMonitorKey="ctrl-m"
						 defaultIsVisible={false}>
		<LogMonitor />
		<Inspector/>
		<DiffMonitor/>
	</DockMonitor>
);