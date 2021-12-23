import './Header'
import HeaderImg from '../../assets/header.jpg'
import './Header.css'
import Cart from '../Cart/Cart'
import { useState } from 'react'

const Header = () => {

    const [modelstate, setModelState] = useState(false)

    const showCartModelHandler = () => {
        setModelState(true)
    }
    const hideCartModelHandler = () => {
        setModelState(false)
    }

    return (
        <>

            {modelstate && <Cart onHide={hideCartModelHandler} />}
            <div className="header">
                <div className="logo">logo</div>
                <button className="cart" onClick={showCartModelHandler}>cart</button>
            </div>
            <div className="bg_img">
                <img src={HeaderImg} alt='Home' />
            </div>
            
        </>
    )
}

export default Header
