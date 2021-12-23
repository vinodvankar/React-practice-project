import './Cart.css'
import Model from '../UI/Model'
import { useContext } from 'react'
import cartItemsContext from '../../store/cart-context'


const Cart = (props) => {
    const cartItmesCtx = useContext(cartItemsContext)
    // const cartItmesNumber = cartItmesCtx.items.reduce((curritem, items)=>{
    //     return curritem += items
    // })

    const cartItmesNumber = cartItmesCtx.items.length

    console.log(cartItmesNumber);

    return (
        <Model onClick={props.onHide}>
            <div className="model-details">
                <span>Name</span>
                <span>9.99</span>
                <span>{cartItmesNumber}</span>
            </div>
            <div className="model-actions">
                <button onClick={props.onHide}>Close</button>
                <button>order</button>
            </div>
        </Model>
    )
}

export default Cart
