import { Dictionary } from "lodash";
import { groupBy } from "lodash/fp";
import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import { Meal } from "../types";

const MealMode = types
  .model("Meal", {
    id: types.identifier,
    cateringId: types.string,
    name: types.string,
    image: types.string,
    price: types.number,
    grams: types.number,
    calories: types.number,
    fat: types.number,
    carb: types.number,
    protein: types.number,
    type: types.enumeration(["first", "second"]),
    category: types.enumeration(["soup", "cake"]),
  })
  .views((self) => ({
    unitsPerGrams(units: number): number {
      return (units / 100) * self.grams;
    },
    get caloriesPerGrams(): number {
      return this.unitsPerGrams(self.calories);
    },
    get fatPerGrams(): number {
      return this.unitsPerGrams(self.fat);
    },
    get carbPerGrams(): number {
      return this.unitsPerGrams(self.carb);
    },
    get proteinsPerGrams(): number {
      return this.unitsPerGrams(self.protein);
    },
    toObject(): Meal {
      return { ...self } as any;
    },
  }));

export type IMealModel = Instance<typeof MealMode>;
export type IMealSnapshotIn = SnapshotIn<typeof MealMode>;
export type IMealSnapshotOut = SnapshotOut<typeof MealMode>;

export const groupByType = (meals: IMealModel[]): Dictionary<IMealModel[]> => {
  return groupBy<IMealModel>((meal) => meal.type)(meals);
};

export const groupByCategory = (
  meals: IMealModel[]
): Dictionary<IMealModel[]> => {
  return groupBy<IMealModel>((meal) => meal.category)(meals);
};

export default MealMode;
