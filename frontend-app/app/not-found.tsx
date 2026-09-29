import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900">
      <h1 className="text-8xl font-bold">
        404
      </h1>
      <p className="text-4xl font-medium">
        Page Not Found
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;