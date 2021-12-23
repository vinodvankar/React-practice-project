import './Model.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    return (
        <div className="backdrop" onClick={props.onClick}/>
    )
}

const ModedOverlay = (props) => {
    return (
        <div className="modeloverlay">
            <div className="model">{props.children}</div>
        </div>
    )
}

const Model = (props) => {
    const modelElements = document.getElementById('model-overlay')
    return (
        <>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, modelElements)}
        {ReactDOM.createPortal(<ModedOverlay>{props.children}</ModedOverlay>,modelElements)}
        </>
    )
}

export default Model
