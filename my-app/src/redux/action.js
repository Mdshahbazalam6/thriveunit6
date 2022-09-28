import { CART_dATA, DETAIL, GET_DATA } from "./actionType"

const getData = ( payload ) =>{
    return{
        type:GET_DATA,
        payload
    }
}

const DetailData = ( payload ) =>{
    return{
        type:DETAIL,
        payload
    }
}

const CartData = ( payload ) =>{
    return{
        type:CART_dATA,
        payload
    }
}

export async function getDatafromjson ( dispatch ){
    try {
        let res = await fetch('http://localhost:8080/products')
        let data = await res.json()
        // console.log(data,'action.js')
        dispatch(getData(data))
    } catch (error) {
        console.log(error)
    }
}

export async function getdetail ( dispatch,id ){
    try {
        let res = await fetch(`http://localhost:8080/products/${id}`)
        let data = await res.json()
        // console.log(data,'action.js')
        dispatch(DetailData(data))
    } catch (error) {
        console.log(error)
    }
}

export async function getCartData ( dispatch ){
    try {
        let res = await fetch('http://localhost:8080/cart')
        let data = await res.json()
        // console.log(data,'action.js')
        dispatch(CartData(data))
    } catch (error) {
        console.log(error)
    }
}


// export async function login ( dispatch ){
//     try {
//         let res = await fetch('https://www.reqres.in/api/login')
//         let data = await res.json()
//         // console.log(data,'action.js')
//         dispatch(loginData(data))
//     } catch (error) {
//         console.log(error)
//     }
// }