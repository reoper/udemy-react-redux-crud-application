/**
 * 状態の管理を総括するオブジェクト 
 */
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import events from './events';

export default combineReducers({
    events, form
})