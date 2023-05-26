import Head from "next/head";
import Image from "next/image";
import React, { ReactNode } from "react";
import Header from "../Header/Header";

interface AuthContainerProps {
  children: ReactNode;
  title: string;
  description: string;
}
const AuthContainer = ({
  children,
  title,
  description,
}: AuthContainerProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full-vh flex flex-col items-center bg-gradient-to-r  bg-slate-100 dark:from-slate-900 dark:to-slate-700">
        <Header />
        <div className="relative w-11/12 md:w-2/3 bg-slate-200  dark:bg-slate-900 flex flex-col home-page justify-center items-center p-10 rounded-md">
          <div className="w-full flex md:flex-row flex-col-reverse">
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="w-full flex flex-col justify-center md:py-0 py-10">
                <h1 className="font-yekan-bold text-3xl text-indigo-600 text-center">
                  {title}
                </h1>
                <p className="w-full text-center font-yekan-regular text-sm mt-3">
                  {description}
                </p>
              </div>
              {children}
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
              <Image
                src="/images/signup.png"
                width={500}
                height={500}
                alt="auth vector"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthContainer;
