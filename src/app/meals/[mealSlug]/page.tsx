interface MealPageProps {
  params: Promise<{ mealSlug: string }>;
}

const MealDetailsPage = async ({ params }: MealPageProps) => {
  const { mealSlug } = await params;

  return <h1>Meal Details {mealSlug}</h1>;
};

export default MealDetailsPage;
