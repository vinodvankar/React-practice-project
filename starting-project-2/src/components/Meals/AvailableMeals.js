import Card from "../UI/Card";
import "./AvailableMeals.css";
import Meal from "./Meal";

const AVAILABLE_MEAL = [
  {
    id: 1,
    name: "pav-bhaji",
    price: 29.99,
  },
  {
    id: 2,
    name: "Itli khaegi",
    price: 9.99,
  },
  {
    id: 3,
    name: "dudhi nu sak",
    price: 19.99,
  },
];

const AvailableMeals = () => {
  const aval_meals = AVAILABLE_MEAL.map((meal) => <Meal key={meal.id} name={meal.name} price={meal.price}/>);
  return (
    <>
      <Card>
        <ul>{aval_meals}</ul>
      </Card>
    </>
  );
};

export default AvailableMeals;
