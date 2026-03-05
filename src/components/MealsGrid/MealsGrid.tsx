import { Meal } from "@/types/meal";

import styles from "./MealsGrid.module.css";
import MealItem from "../MealItem/MealItem";

interface MealsGridProps {
  meals: Meal[];
}

const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
          <li key={meal.id}>
              <MealItem meal={meal}/>
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
