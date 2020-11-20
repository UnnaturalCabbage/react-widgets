import { createContext, useMemo } from "react";
import OrderModel from "../models/OrderModel";
import { Meal, Order } from "../types";

export class CateringService {
  private cateringId: string;
  private token?: string;

  constructor(cateringId: string, token?: string) {
    this.cateringId = cateringId;
    this.token = token;
  }

  public postOrder(order: Order): Promise<boolean> {
    return Promise.resolve(true);
  }

  public getOrders(): Promise<Order[]> {
    return Promise.resolve([
      {
        cateringId: this.cateringId,
        email: "bogdan.ksenov@gmail.com",
        phone: "+380990000000",
        date: new Date(),
        meals: [],
      },
    ]);
  }

  public postMeal(meal: Meal): Promise<boolean> {
    return Promise.resolve(true);
  }

  public getMeals(): Promise<Meal[]> {
    return Promise.resolve([
      {
        id: "1",
        cateringId: this.cateringId,
        name: "Суп",
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1074500_11-4325965.jpg?quality=90&resize=768,574",
        price: 100,
        grams: 200,
        calories: 300,
        fat: 10,
        carb: 200,
        protein: 30,
        type: "first",
        category: "soup",
      },
      {
        id: "2",
        cateringId: this.cateringId,
        name: "Суп 2",
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1074500_11-4325965.jpg?quality=90&resize=768,574",
        price: 100,
        grams: 200,
        calories: 300,
        fat: 10,
        carb: 200,
        protein: 30,
        type: "second",
        category: "soup",
      },
      {
        id: "3",
        cateringId: this.cateringId,
        name: "Суп 3",
        image: "",
        price: 100,
        grams: 200,
        calories: 300,
        fat: 10,
        carb: 200,
        protein: 30,
        type: "first",
        category: "soup",
      },
      {
        id: "4",
        cateringId: this.cateringId,
        name: "Десерт",
        image: "",
        price: 100,
        grams: 200,
        calories: 300,
        fat: 10,
        carb: 200,
        protein: 30,
        type: "first",
        category: "cake",
      },
    ]);
  }
}

const m = OrderModel.create({
  id: "",
  cateringId: "",
  meals: [],
  email: "",
  phone: "",
  date: new Date(),
});

const s = new CateringService("", "");

const Context = createContext<CateringService>(null!);
export const CateringProvider = Context.Provider;
export const useCateringService = (cateringId: string, token?: string) =>
  useMemo(() => new CateringService(cateringId, token), [cateringId, token]);
