"use client";

import Image from "next/image";
import Link from "next-intl/link";

import notFound404Image from "@/app/[locale]/assets/images/404.svg";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="mainContainer">
        <main className="flex justify-center items-center bg-slate-100 min-h-screen">
          <div className="container p-6">
            <div className="flex flex-col items-center gap-8">
              <Image
                className="w-full image404"
                src={notFound404Image}
                alt="404 not found"
              />
              <div className="flex flex-1 flex-col justify-center gap-1 max-w-screen-md">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl mx-4 font-semibold text-center mb-2 text-darkblue">
                  UH OH! You&apos;re lost.
                </h1>
                <p className="text-center mb-4 leading-tight text-darkblue">
                  The page you are looking for does not exist. How you got here
                  is a mystery! But you can click the button below to go back to
                  the homepage.
                </p>
                <span className="mx-auto">
                  <Link
                    href="/"
                    className="text-base text-white bg-darkblue py-3 px-3 rounded-md font-medium"
                  >
                    Go to Home
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
