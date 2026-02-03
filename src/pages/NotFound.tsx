import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-slate-100" />

        <h1 className="text-lg font-semibold text-slate-800">Page not found</h1>

        <p className="mt-2 text-sm text-slate-500">
          We couldn’t find the page you were looking for. It may have been
          removed or the URL might be incorrect.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Go to dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
