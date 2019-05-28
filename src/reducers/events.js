import _ from 'lodash';
import { READ_EVENTS } from '../actions';

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            // console.log(action.response.data);
            // action.response.dataは以下のようなデータとなる
            // [
            // 　{id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."},
            // 　{id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
            // ]
            // が、扱いづらいので以下のように加工してstateにセットする
            // [
            // 1: {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."},
            // 2: {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
            // ]
            // console.log(_.mapKeys(action.response.data, 'id'));
            return _.mapKeys(action.response.data, 'id');
        default:
            return events;
    }
}