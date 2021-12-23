import Header from "./components/Layout/Header"
import AvailableMeals from "./components/Meals/AvailableMeals"
import ItemCartProvider from "./store/ItemCartProvider"


const App = () => {
  return (
    <ItemCartProvider>
      <Header />
      <AvailableMeals />
    </ItemCartProvider>
  )
}

export default App
