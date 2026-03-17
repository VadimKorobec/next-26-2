import sql from "better-sqlite3";

import { Meal } from "@/types/meal";

const db = sql("meals.db");

export const getMeals = () => {
  return db.prepare("SELECT * FROM meals").all() as Meal[];
};

export const getMeal = async (slug: string) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as Meal;
};
