import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const { error, status } = useRouteError() as {
    error: { message: string };
    status: number;
  };
  console.log(useRouteError());
  return (
    <div className="flex h-screen justify-center items-center flex-col gap-4">
      <p className="text-6xl font-bold">Oops!</p>
      <p className="text-6xl font-bold">{status}</p>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl">
        <i>{error.message}</i>
      </p>
    </div>
  );
};
