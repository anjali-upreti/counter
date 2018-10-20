import React from 'react';
const initialState = {
    counter: 0,
    results:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT' :
                const newState = Object.assign({},state);
                newState.counter = state.counter + 1
                return newState;
        case 'DECREMENT' :
                return {...state,
                    counter : state.counter - 1}
        case 'ADD' :
            return {...state,
                counter : state.counter + action.payload}
        case 'SUBTRACT' :
            return {...state,
                counter : state.counter - action.payload}
        case 'STORE_RESULT' :
            return {...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT' :
                const newArray = [...state.results];
                 const id = newArray.findIndex(x=> x.id === action.payload);
                newArray.splice(id,1);
                return {
                    ...state,
                    results: newArray
            }
    }
    return state;
}

export default reducer;