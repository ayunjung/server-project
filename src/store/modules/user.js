import { bindActionCreators } from "redux";

const CREATE = 'user/CREATE';
const DONE = 'user/DONE';

export function create(payload) {
    return {
        type: CREATE,
        payload: payload,
    };
}

export function done(id) {
    return {
        type: DONE,
        id: id,
    };
}

const initState = {
    list: [{
        id: 0,
        text: "척추 펴기",
        done: true,
    },
    {
        id: 1,
        text: "물 마시기",
        done: false,
    },
  ],
}

//리듀서
export default function user(state = initState, action) {
    switch(action.type) {
        case CREATE:
            return {
                ...state,
                list: state.list.concat({
                    id: action.payload.id,
                    text: action.payload.text,
                    done: false,
                })
            };
        case DONE:
            return {
                ...state,
                list: state.list.map(item => {
                    return item.id === action.id ? { ...item, done: true } : item;
                })
            };
        default:
            return state;
    }
}