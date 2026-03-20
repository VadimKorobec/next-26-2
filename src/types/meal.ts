export type Meal = {
  creator: string;
  creator_email: string;
  id?: number;
  image: File;
  imagePath?: string;
  instructions: string;
  slug?: string;
  summary: string;
  title: string;
};
