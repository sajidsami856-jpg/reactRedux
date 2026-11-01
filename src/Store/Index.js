import {createStore} from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{counterVal:0},
    reducers:{
        increment:(state)=>{
            state.counterVal++;
            // console.log(state,action);
        },
        decrement:(state)=>{
            state.counterVal--;
            console.log(state);
        },
        add:(state,action)=>{
            console.log(state,action);
            state.counterVal +=Number(action.payload);
        },
        subtract:(state,action)=>{
            console.log(state,action);
            state.counterVal -=Number(action.payload);
        }
    }
})

const privacySlice=createSlice({
    name:"privacy",
    initialState:false,
    reducers:{
        toggle:(state)=>{
           return state = !state;
        }
    }
})


const counterStore = configureStore({reducer:{
    counter:counterSlice.reducer,
    privacy:privacySlice.reducer,
}});

export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;
export default counterStore;






































// const INITIAL_VALUE = {
//     counter:0,
// }
// const counterReducer=(store=INITIAL_VALUE,action)=>{
//     if(action.type==="INCRIMENT"){
//         return {counter:store.counter + 1};
//     }else if(action.type === "DECRIMENT"){
//         return {counter:store.counter - 1};
//     }else if(action.type==="ADD"){
//         return {counter:store.counter + Number(action.payload.num)}
//     }else if (action.type==="SUBTRACT"){
//         return {counter:store.counter - Number(action.payload.num)}
//     }
//     console.log("Action Received",action);
//     return store;
// }
