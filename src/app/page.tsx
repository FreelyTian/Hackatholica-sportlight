/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center prose prose-slate min-w-full min-h-screen">
        <div>
          <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
            <img
              src="/img/vince-fleming-aZVpxRydiJk-unsplash.jpg"
              className="w-full animate-in slide-in-from-top-10 duration-1000 fade-in-15 ease-in-out -mt-4"
              alt="pessoas jogando volei"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-80 ">
              <nav className="flex items-end justify-end pt-4 pb-4 pr-16 text-primary gap-16 bg-transparent">
                <Link
                  href="/"
                  className="hover:underline text-white hover:scale-105 animate-in slide-in-from-right-6 duration-75 ease-in-out"
                >
                  Projetos
                </Link>
                <Link
                  href="/"
                  className="hover:underline text-white hover:scale-105 animate-in slide-in-from-right-6 duration-300 ease-in-out"
                >
                  Parceiros
                </Link>
                <Link
                  href="/"
                  className="hover:underline text-white hover:scale-105 animate-in slide-in-from-right-6 duration-300 ease-in-out"
                >
                  Sobre
                </Link>
              </nav>
              <div className="p-4 animate-in mt-40 h-1/6 w-1/4 slide-in-from-bottom-10 duration-1000 fade-in-15 ease-in-out hover:scale-105 hover:pl-6">
                <h1 className="text-white text-6xl w-1/4">
                  Sportlight
                </h1>
                <p className="text-white -mt-8">
                  venha conhecer seu novo esporte
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
