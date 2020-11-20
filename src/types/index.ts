export type MealType = "first" | "second";
export type MealCategory = "soup" | "cake";
export interface Meal {
  id: string;
  cateringId: string;
  name: string;
  image: string;
  price: number;
  grams: number;
  calories: number;
  fat: number;
  carb: number;
  protein: number;
  type: MealType;
  category: MealCategory;
}

export interface Order {
  cateringId: string;
  email: string;
  phone: string;
  date: Date;
  meals: Meal[];
}
