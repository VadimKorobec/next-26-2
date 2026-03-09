"use client";

interface ErrorProps {
  error: Error & { digest?: string };
}

const Error = ({ error }: ErrorProps) => {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>{error.message}</p>
    </main>
  );
};

export default Error;
