import { SET_NAME, SET_LASTNAME, SET_ID , SET_ITEM , REMOVE_ITEM } from './type'


const initialState = {
    // name: '',
    // lastname: '',
    id : 0 ,
    item : [
    //    { "text" :'' , 
    //     "id": 0 }
    ]
    
}

function reducer(state = initialState, action) {
    // console.warn('click')
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload,


            };
        case SET_LASTNAME:
            return {
                ...state,
                lastname: action.payload
            };
        case SET_ID:
            return {
                ...state,
                id: state.id + 1
            };
        case SET_ITEM:
            return {
                ...state,
                
                item : [...state.item , { 'text': action.payload,  'id' : state.id }]
            };

        case REMOVE_ITEM:
            return {
                // ...state,
                // item : state.item,
                // array :[],
                // for (i = 0 , i < state.id ,)
                // item : state.item.REMOVE_ITEM('id' , action.payload)
                ...state,
                item : [
                    ...state.item.slice(0,action.payload),
                    ...state.item.slice(action.payload + 1 )
                ]
               
        
            };
        default:
            return state;
    }

}
export default reducer

// ...state,
// array : [...state.item] , // make a separate copy of the array
// index = array.indexOfu(action.payload),
// index !== -1 ? (array.splice(index, 1)) : (array = [...state.item])  ,
// item = [...array]