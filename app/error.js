"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
      useEffect(() => {
            // Log the error to an error reporting service
            console.error(error);
      }, [error]);

      return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                  <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-red-500 mb-4">
                              Something went wrong fetching posts segment!
                        </h2>
                        <p className="text-gray-700 mb-6">
                              An error occurred while trying to load the
                              content. Please try again later.
                        </p>
                        <button
                              onClick={() => reset()}
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                              Try again
                        </button>
                  </div>
            </div>
      );
}
