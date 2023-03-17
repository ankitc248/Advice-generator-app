import React from "react";
import { useQuery } from "react-query";

export default function Advice() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.adviceslip.com/advice").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <p className="advice-id">Advice #{data.slip.id}</p>
      <p className="advice-body">&#8220;{data.slip.advice}&#8221;</p>
    </>
  );
}
