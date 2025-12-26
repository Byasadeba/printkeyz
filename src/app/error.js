'use client';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-red-800 p-4">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <p className="mt-2">{error.message}</p>
      <button
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
