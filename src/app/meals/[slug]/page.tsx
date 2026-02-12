interface MealPageProps {
  params: Promise<{ slug: string }>;
}

const MealPage = async ({ params }: MealPageProps) => {
  const { slug } = await params;
  return <h1> Meal {slug}</h1>;
};

export default MealPage;
