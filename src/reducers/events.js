import _ from 'lodash';
import {
    CREATE_EVENT,
    READ_EVENT,
    READ_EVENTS,
    DELETE_EVENTS,
    UPDATE_EVENTS,
} from '../actions';

export default (events = {}, action) => {
    switch (action.type) {
        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENTS:
                // console.log(action.response.data);
            // {id: 10, title: "Let's have an event 10!", body: "This is the body for event 10."}
            console.log(events)
            const data = action.response.data;
            return { ...event, [data.id]: data };
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
        case DELETE_EVENTS:
            delete events[action.id];
            return { ...events };
        default:
            return events;
    }
}