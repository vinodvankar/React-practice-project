import './MealForm.css'

const MealForm = () => {

    const addItemsToCart = (e) =>{
        e.preventDefault()
        console.log('form');
    }
    return (
        <form className="form" onSubmit={addItemsToCart}>
            <input className="input" type="text" />
            <button className="button" type='submit'>Add Meal</button>
        </form>
    )
}

export default MealForm
