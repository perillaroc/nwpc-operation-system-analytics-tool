import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import session_reducer from './session_system'
import llsubmit4_error_log_reducer from '../../SubmitLogAnalytics/reducers/llsubmit4_error_log'
import {system_running_time_reducer} from '../../SystemRunningTimeAnalytics/reducers'

const operationSystemAnalyticsAppReducer = combineReducers({
  llsubmit4_error_log: llsubmit4_error_log_reducer,
  session_system: session_reducer,
  system_running_time: system_running_time_reducer,
  routing
});

export default operationSystemAnalyticsAppReducer;