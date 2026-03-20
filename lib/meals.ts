import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

import { Meal } from "@/types/meal";

const db = sql("meals.db");

export const getMeals = () => {
  return db.prepare("SELECT * FROM meals").all() as Meal[];
};

export const getMeal = async (slug: string) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as Meal;
};

export const saveMeal = async(meal: Meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer()

  stream.write(Buffer.from(bufferedImage))
};
