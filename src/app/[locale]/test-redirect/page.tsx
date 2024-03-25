"use client";

export default function TestRedirect({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-20">
      <h1>Redirection page</h1>

      <a
        href="br.com.britannica.escola://"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Redirect back to app
      </a>
    </main>
  );
}
