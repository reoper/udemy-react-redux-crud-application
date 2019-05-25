/**
 * 状態の管理を総括するオブジェクト 
 */
import { combineReducers } from 'redux';
import count from './count';

export default combineReducers({
    count
})