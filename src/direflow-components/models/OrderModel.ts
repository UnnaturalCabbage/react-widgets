import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import { Order } from "../types";
import MealModel from "./MealModel";

const OrderModel = types
  .model("Order", {
    id: types.optional(types.string, ""),
    cateringId: types.string,
    email: types.string,
    phone: types.string,
    date: types.Date,
    meals: types.array(MealModel),
  })
  .views((self) => ({
    toObject(): Order {
      return { ...self } as any;
    },
  }));

export type IOrderModel = Instance<typeof OrderModel>;
export type IOrderSnapshotIn = SnapshotIn<typeof OrderModel>;
export type IOrderSnapshotOut = SnapshotOut<typeof OrderModel>;
export default OrderModel;

// export default class OrderModel {
//   public readonly cateringId: string;
//   public readonly email: string;
//   public readonly phone: string;
//   public readonly date: Date;
//   public readonly meals: IMealModel[];

//   constructor({ cateringId, email, phone, date, meals }: Props) {
//     this.cateringId = cateringId;
//     this.email = email;
//     this.phone = phone;
//     this.date = date;
//     this.meals = meals;
//   }

//   // public get phone(): string { return this._phone; }
//   // public set phone(value: string) {
//   //     // TODO: validate and format phone number
//   //     this._phone = value;
//   // }

//   // public get email(): string { return this._email; }
//   // public set email(value: string) {
//   //     value = value.trim();
//   //     if (isValidEmail(value)) {
//   //         this._email = value;
//   //     } else {
//   //         throw new Error("invalid data");
//   //     }
//   // }
//   // public get date(): Date { return this._date; }
//   // public set date(value: Date) {
//   //     let today = Date.now();
//   //     if (value.getTime() > today) {
//   //         this._date = value;
//   //     } else {
//   //         throw new Error("invalid data");
//   //     }
//   // }
// }
