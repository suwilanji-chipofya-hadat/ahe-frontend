import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-3xl">Oops!</h1>
      <p className="font-semibold text-2xl">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="font-semibold text-xl text-gray-800">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}