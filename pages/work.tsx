import Head from "next/head";
import Link from "next/link";

import { useState, useEffect } from "react";
import { getSortedProjectsData } from "../lib/projects";
import Header from "../components/Header";
import Loading from "../components/Loading";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Work({ allProjectsData }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <title>Maxime Laforet - Work</title>
        <meta name="author" content="Maxime Laforet" />
        <meta
          name="description"
          content="Personal website of Maxime Laforet, front-end / UX developer — Work & Projects"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:title" content="Maxime Laforet — Work & Projects" />
        <meta property="og:image" content="/maxime-laforet.jpg" />
        <meta
          property="og:description"
          content="Personal website of Maxime Laforet, front-end / UX developer — Work & Projects"
        />
        <meta property="og:url" content="https://macx.im" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@macxim" />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main className="flex flex-col items-center max-w-4xl px-4 mb-24 lg:p-0">
            <div className="absolute left-0 flex items-center justify-center hidden p-8 top-1/2 left-1/2 md:block">
              <div className="bg-gradient-to-tr from-zinc-50 to-zinc-600 rounded-full w-[500px] h-[200px] absolute -rotate-12 blur-2xl -left-[64px] -top-[170px] opacity-30 md:opacity-100" />
              <div className="bg-gradient-to-bl from-orange-300 to-orange-600 rounded-full w-[500px] h-[180px] z-[-1] absolute blur-2xl -right-8 -top-8 rotate-8 opacity-30 md:opacity-100" />
            </div>
            <section className="max-w-4xl w-full flex-1 p-[0.5px] text-2xl leading-normal rounded-md shadow-sm bg-gradient-to-l from-zinc-50 via-zinc-300 to-zinc-100 ">
              <div className="relative p-6 border rounded-md md:p-8 bg-white/90 backdrop-blur-sm border-zinc-900/5">
                <h1 className="text-4xl">Work & projects</h1>

                <ul
                  role="list"
                  className="relative grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3"
                >
                  {allProjectsData.map(({ id, title, thumb }) => (
                    <li
                      className="relative flex flex-col col-span-1 overflow-hidden text-center bg-white rounded-md group"
                      key={id}
                    >
                      <Link href={`projects/${id}`}>
                        <div className="flex flex-col flex-1">
                          <img src={thumb} alt="" loading="lazy" />
                        </div>
                        <div className="text-white left-0 top-0 group-hover:visible absolute w-full h-full bg-gradient-to-bl from-zinc-700 via-zinc-900/[96%] to-black invisible flex items-center justify-center transition ease-in-out duration-100">
                          {title}

                          <svg
                            className="absolute w-6 h-6 bottom-8 right-8 -rotate-12"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                          >
                            <path
                              d="M12.25 9.75V4.53125C12.25 4.53125 12.25 2.75 10.5 2.75C8.75 2.75 8.75 4.53125 8.75 4.53125V12C8.75 12 7.04789 10.1852 6 9.83594C5.65156 9.71979 5.0538 9.74916 4.51827 9.81287C3.91727 9.88437 3.57529 10.5056 3.78295 11.0741L6.30025 17.9655C7.02073 19.9379 8.89686 21.25 10.9967 21.25H16.25C18.4591 21.25 20.25 19.4591 20.25 17.25V13.3967C20.25 11.8845 19.1244 10.6086 17.6239 10.4201L15.2538 10.1224L12.25 9.75Z"
                              fill="white"
                            />
                            <path
                              d="M12.25 9.75V4.53125C12.25 4.53125 12.25 4.53125 12.25 4.53125C12.25 4.53125 12.25 2.75 10.5 2.75C8.75 2.75 8.75 4.53125 8.75 4.53125C8.75 4.53125 8.75 4.53125 8.75 4.53125V12M12.25 9.75V11.25M12.25 9.75L15.2538 10.1224L17.6239 10.4201C19.1244 10.6086 20.25 11.8845 20.25 13.3967V17.25C20.25 19.4591 18.4591 21.25 16.25 21.25H10.9967C8.89686 21.25 7.02073 19.9379 6.30025 17.9655L3.78295 11.0741C3.57529 10.5056 3.91727 9.88437 4.51827 9.81287C5.0538 9.74916 5.65156 9.71979 6 9.83594C7.04789 10.1852 8.75 12 8.75 12M8.75 12V13.5938"
                              stroke="#0F172A"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
}
