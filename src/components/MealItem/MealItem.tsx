import Image from "next/image";
import Link from "next/link";

import styles from "./MealItem.module.css";
import { Meal } from "@/types/meal";

interface MealItemProps {
  meal: Meal;
}

const MealItem = async ({ meal }: MealItemProps) => {
  const { image, title, creator, summary, slug } = meal;

  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
