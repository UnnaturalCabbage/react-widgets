import { createContext, useContext } from "react";
import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import MealModel, { IMealModel } from "../models/MealModel";

export const BasketStore = types
  .model("Basket", {
    basket: types.map(
      types.model({
        meal: MealModel,
        qty: types.number,
      })
    ),
  })
  .actions((self) => ({
    setMealQty(meal: IMealModel, qty: number): void {
      qty = Math.max(qty, 0);
      self.basket.set(meal.id, {
        meal,
        qty: qty,
      });
    },
    changeMealQtyBy(meal: IMealModel, num: number): void {
      const currQty = (self.basket.get(meal.id) || { qty: 0 }).qty;
      this.setMealQty(meal, currQty + num);
    },
    addMeal(meal: IMealModel): void {
      this.changeMealQtyBy(meal, 1);
    },
    removeMeal(meal: IMealModel): void {
      this.changeMealQtyBy(meal, -1);
    },
  }))
  .views((self) => ({
    get totalPrice(): number {
      return Object.values(self.basket).reduce(
        (acc, { qty, meal }) => acc + meal.price * qty,
        0
      );
    },
  }));

export type IBasket = Instance<typeof BasketStore>;
export type IBasketSnapshotIn = SnapshotIn<typeof BasketStore>;
export type IBasketSnapshotOut = SnapshotOut<typeof BasketStore>;

const BasketStoreContext = createContext<IBasket>(null!);
export const BasketStoreProvider = BasketStoreContext.Provider;
export const useBasketStore = () => useContext(BasketStoreContext);
