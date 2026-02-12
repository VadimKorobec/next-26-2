import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <ul>
        <li>
          <Link href="/meals">Meals Page</Link>
        </li>
        <li>
          <Link href="/community">Community Page</Link>
        </li>
        <li>
          <Link href="/meals/share">Share Page</Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
