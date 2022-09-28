import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartData } from '../redux/action'
import '../CSS/cart.css'
import { useNavigate } from 'react-router'


const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        getCartData(dispatch)
    },[])
    const { cart } = useSelector((store)=>store)
    console.log(cart)
    const removefromCart= async( id ) =>{
      try {
        let res = await fetch(`http://localhost:8080/cart/${id}`,{
            method: "DELETE"
        })
        let data = await res.json()
        getCartData(dispatch)
      } catch (error) {
        console.log(error)
      }
    }

    const handleNumber = async(ele,num) =>{
     ele.number = ele.number + num
      if(ele.number < 0){
        alert("Quantity can not br Negative integer")
        return
      }
      try {
        let res = await fetch(`http://localhost:8080/cart/${ele.id}`,{
            method :"PATCH",
            body:JSON.stringify(ele),
            headers: {
                'Content-type': 'application/json'
            }
        })
        let data = await res.json()
        getCartData(dispatch)
      } catch (error) {
        console.log(error)
      }
    }

    let amount = 0

    const Order = ( )=>{
        alert("Order Placed")
        navigate('/')
    }
  return (
    <>
    <div className="CartContainer">
        {
            cart?.map((ele)=>{
                amount += ele.price*ele.number
                return <div className="cartBox" key={ele.id}>
                <div className="CartBoxFirstChild">
                    <img style={{width:"100%",borderRadius:'1vw'}} src={ele.image} alt="" />
                </div>
                <div className="CartBoxSecondChild">
                <p className="brand">Title : {ele.title}</p>
                <p className="brand">Brand Name : {ele.brand}</p>

                <p className="brand">Category : {ele.category}</p>

                <p className="brand">Price : {ele.price*ele.number <= 0 ? ele.price : ele.price*ele.number}</p>
                <p className="brand">Quantity : {ele.number}</p>
                <div className="increaseButtonBox">
                <div className="increase" onClick={()=>handleNumber(ele,1)}>INCR</div>
                <div className="increase" onClick={()=>handleNumber(ele,-1)}>DECR</div>
                </div>
                <div className="removefromCart" onClick={()=>removefromCart(ele.id)}>Remove from Cart</div>
                </div>
                </div>
            })
        }
    </div>
     <div className="totalButtonBox">
        <div className="totalButton">Total Sum is :{amount}</div>
        <div className="Order" onClick={Order}>Order Now</div>
     </div>
    </>
  )
}

export default Cart