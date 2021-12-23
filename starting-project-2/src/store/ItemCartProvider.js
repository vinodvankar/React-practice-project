import { useReducer } from "react"
import cartItemsContext from "./cart-context"

const defaultCartState = {
    items:[]
}

const cartItemsReducer = (state, action) => {
    if(action.action === 'ADD_TO_CART'){
        const AddedcartItems = state.items.concat(action.items)
        return {
            items: AddedcartItems
        }
    }
    return defaultCartState
}

const ItemCartProvider = (props) => {

    const [cartItemstate, dispatchItemsCartAction] = useReducer(cartItemsReducer, defaultCartState)

    const addItemsToCart = (items) => {
        dispatchItemsCartAction({action: 'ADD_TO_CART', items: items})
    }
    const removeItemsToCart = (itemsid) => {
        dispatchItemsCartAction({action: 'REMOVE_FROM_CART', itemsid: itemsid})
    }

    const itemsCartcontext = {
        items:cartItemstate,
        addItemsToCart: addItemsToCart,
        removeItemsToCart: removeItemsToCart
    }

    return (
        <cartItemsContext.Provider value={itemsCartcontext}>{props.children}</cartItemsContext.Provider>
    )
}

export default ItemCartProvider
