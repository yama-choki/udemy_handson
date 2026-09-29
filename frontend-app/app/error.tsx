"use client";

import Link from "next/link";
import React from "react";


const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900">
      <h1 className="text-8xl font-bold">500</h1>
      <p className="text-4xl font-medium">Internal Server Error</p>
      <div className="mt-6 flex space-x-4">
        <Link
          href="/"
          className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;