


const initialState = false


export const infoCollection = (state = initialState , action) =>{
    switch(action.type){
        case 'INFOSUBMIT':
            return action.payload
        default:
            return state
    }

}