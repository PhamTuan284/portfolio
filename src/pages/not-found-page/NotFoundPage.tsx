import { Link, useRouteError } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function NotfoundPage() {
  const error: unknown = useRouteError();
  return (
    <div
      id="error-page"
      className="d-flex flex-column gap-8 justify-content-center align-items-center vh-100 fade-in-page"
    >
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-400">
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
      <Button variant="dark">
        <Link to="/">Back to home</Link>
      </Button>
    </div>
  );
}
