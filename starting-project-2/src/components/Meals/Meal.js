import "./Meal.css";
import MealForm from "./MealForm";

const Meal = (props) => {
  return (
    <li className="mealitem_list">
      <div>
        <h3>{props.name}</h3>
        <div>{props.price}</div>
      </div>
      <div className="mealform">
            <MealForm />
      </div>
    </li>
  );
};

export default Meal;
