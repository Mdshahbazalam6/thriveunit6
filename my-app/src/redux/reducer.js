import { CART_dATA, DETAIL, GET_DATA } from "./actionType"

const store = {
    products:[],
    detail:{},
    cart:[]
}

export const reducer = ( initState = store,{type,payload}) =>{
    switch(type){
        case GET_DATA :
            return{
                ...initState,products:payload
            }
        case DETAIL :
            return {
                ...initState,detail:payload
            }
        case CART_dATA :
            return {
                ...initState,cart:payload
            }
        default :
        return initState
    }
}