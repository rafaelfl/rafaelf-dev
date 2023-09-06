import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Fredoka } from "next/font/google";

import notFound404Image from "@/app/[locale]/assets/images/404.svg";

import styles from "./notFoundStyles.module.scss";

const fredoka = Fredoka({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "404 Not found page",
  metadataBase: new URL("https://rafaelf.dev"),
};

const NotFoundPage = () => {
  return (
    <div className={`${fredoka.className} ${styles.mainContainer}`}>
      <main className="container p-6">
        <div className="flex flex-col items-center gap-8">
          <Image
            className={`w-full ${styles.image404}`}
            src={notFound404Image}
            alt="404 not found"
          />
          <div className="flex flex-1 flex-col justify-center gap-1 max-w-screen-md">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl mx-4 font-semibold text-center mb-2 text-darkblue">
              UH OH! You&apos;re lost.
            </h1>
            <p className="text-center mb-4 leading-tight text-darkblue">
              The page you are looking for does not exist. How you got here is a mystery! But you
              can click the button below to go back to the homepage.
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
      </main>
    </div>
  );
};

export default NotFoundPage;
