import {createStore} from "redux";

const INITIAL_VALUE = {
    counter:0
}

const counterReducer=(store=INITIAL_VALUE,action)=>{
    if(action.type==="INCRIMENT"){
        return {counter:store.counter + 1};
    }else if(action.type === "DECRIMENT"){
        return {counter:store.counter - 1};
    }else if(action.type==="ADD"){
        return {counter:store.counter + Number(action.payload.num)}
    }else if (action.type==="SUBTRACT"){
        return {counter:store.counter - Number(action.payload.num)}
    }
    console.log("Action Received",action);
    return store;
}

const counterStore = createStore(counterReducer);

export default counterStore;