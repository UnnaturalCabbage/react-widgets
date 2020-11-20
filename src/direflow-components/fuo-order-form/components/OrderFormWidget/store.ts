import { observable, action } from "mobx";
import { useLocalObservable } from "mobx-react-lite";

import MealModel, { IMealModel } from "Models/MealModel";
import { useCateringService } from "Services/CateringService";

interface StoreProps {
  cateringId: string;
}

export interface MealsStore {
  allMeals: IMealModel[];
  setAllMeals(meals: IMealModel[]): void;
  requestAllMeals(): Promise<void>;
}

export const useMealsStore = ({ cateringId }: StoreProps) => {
  const cateringService = useCateringService(cateringId);
  const store = useLocalObservable<MealsStore>(
    () => ({
      allMeals: [],
      setAllMeals(meals) {
        this.allMeals = meals;
      },
      async requestAllMeals() {
        const meals = await cateringService.getMeals();
        this.setAllMeals(meals.map((m) => MealModel.create(m)));
      },
    }),
    {
      allMeals: observable,
      setAllMeals: action,
      requestAllMeals: action,
    }
  );
  return store;
};
