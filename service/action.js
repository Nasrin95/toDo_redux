import { SET_NAME , SET_LASTNAME , SET_ID , SET_ITEM , REMOVE_ITEM} from "./type";
import {store} from '../page/App1'


const setNameAction = text => {
    return{
        type: SET_NAME ,
        payload: text

    };
};

const setLastnameAction = (text) => {
    return{
        type : SET_LASTNAME,
        payload : text
    }
}

const setIdAction = () => {
    return{
        type : SET_ID,
    
    }
}

const setItemAction = (text) => {
    return{
        type : SET_ITEM,
        payload : text
    }
}

const setRemoveItemAction = (idex)  => {
    return{
        type : REMOVE_ITEM,
        payload : idex
    }
}

export const  setName = text => {
    return setNameAction(text);
} ;

export const  setLastname = text => {
    return setLastnameAction(text);
} ;

export const  setId = () => {
    
    return setIdAction();
} ;


export const  setItem = text => {
    return setItemAction(text);
} ;

export const  setRemoveItem = index => {
    return setRemoveItemAction(index);
} ;