import "./App.css";
import { useQuery } from "react-query";

export default function App() {
  const { isLoading, error, data, refetch, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(process.env.REACT_APP_ADVICE_LINK).then((res) => res.json()),
    staleTime: 0,
  });

  if (error) return <h1>An error has occurred: {error.message}</h1>;

  return (
    <div className="App">
      <main>
        <p className="advice-id">Advice{!isLoading && `#${data.slip.id}`}</p>
        <p className="advice-body">
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <span> &#8220;{data.slip.advice}&#8221; </span>
          )}
        </p>
        <div className="divider"></div>

        <button
          disabled={isLoading || isFetching}
          type="button"
          className={isLoading || isFetching ? "rotate-dice" : ""}
          onClick={() => refetch()}
        >
          <img src={"/images/icon-dice.svg"} width="25" alt="dice-icon" />
        </button>
      </main>
    </div>
  );
}
