import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import { getSortedProjectsData } from "../lib/projects";
import MLetter from "../components/M";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Home({ allProjectsData }) {
  return (
    <>
      <Head>
        <title>Maxime Laforet - Front-End Developer</title>
        <meta name="author" content="Maxime Laforet" />
        <meta
          name="description"
          content="Front-End Developer specializing in Next.js, React, and TypeScript. Building polished interfaces where design and code meet."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:title" content="Maxime Laforet - Front-End Developer" />
        <meta property="og:image" content="/maxime-laforet.jpg" />
        <meta
          property="og:description"
          content="Front-End Developer specializing in Next.js, React, and TypeScript"
        />
        <meta property="og:url" content="https://macx.im" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@macxim" />
      </Head>
      <Header />

      <main id="main-content" role="main" className="min-h-screen px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-8">
                <div className="p-8 bg-white border shadow-sm rounded-2xl border-zinc-200">
                  <Image
                    src="/maxime-laforet.jpg"
                    alt="Maxime Laforet"
                    width={96}
                    height={96}
                    className="mb-6 rounded-full"
                    priority
                  />

                  <h1 className="mb-2 text-3xl font-bold text-zinc-900">
                    Maxime Laforet
                  </h1>

                  <p className="mb-6 text-lg text-zinc-600">
                    Front-End Developer
                  </p>

                  <div className="mb-8 space-y-4 text-zinc-800">
                    <p>
                      Front-End Developer building responsive web
                      applications. Specializing in translating design mockups
                      into clean, maintainable code using React, Next.js, TypeScript and
                      modern CSS.
                    </p>
                    <p>
                      10+ years turning designs into performant, maintainable code.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mb-6 text-zinc-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-zinc-500">Working remotely in Tenerife, Spain</span>
                  </div>

                  <a
                    href="mailto:me@macx.im"
                    className="block w-full px-6 py-3 mb-6 font-medium text-center text-white transition-colors rounded-lg bg-zinc-900 hover:bg-zinc-800"
                  >
                    Get in touch
                  </a>

                  <div className="flex justify-center gap-4 pt-6 border-t border-zinc-200">
                    <a
                      href="https://github.com/macxim/"
                      className="transition-colors text-zinc-400 hover:text-zinc-900"
                      aria-label="GitHub"
                    >
                      <svg className="w-6 h-6 fill-current">
                        <use xlinkHref="#macxim-Svg--github" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/maximelaforet"
                      className="transition-colors text-zinc-400 hover:text-zinc-900"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6 fill-current">
                        <use xlinkHref="#macxim-Svg--linkedin" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/macxim"
                      className="transition-colors text-zinc-400 hover:text-zinc-900"
                      aria-label="Twitter"
                    >
                      <svg className="w-6 h-6 fill-current">
                        <use xlinkHref="#macxim-Svg--twitter" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <section className="lg:col-span-8">
              <div className="p-8 bg-white border shadow-sm rounded-2xl border-zinc-200 lg:p-10">
                <h2 className="mb-10 text-3xl font-bold text-zinc-900">
                  Featured Work
                </h2>

                <div className="space-y-16">
                  {allProjectsData.map((project, index) => (
                    <React.Fragment key={project.id}>
                      <article key={project.id} className="group">
                        <Link href={`/projects/${project.id}`}>
                          <div className="relative block mb-4 overflow-hidden shadow-sm cursor-pointer rounded-xl bg-zinc-100 aspect-video">
                            <Image
                              src={project.thumb}
                              alt={`${project.title} screenshot`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                              priority={index === 0}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
                            />
                            <div className="absolute inset-0 z-10 transition-colors duration-300 bg-black/0 group-hover:bg-black/5" />
                          </div>
                        </Link>

                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-2xl font-bold text-zinc-900">
                            <Link
                              href={`/projects/${project.id}`}
                              className="transition-colors hover:text-zinc-600"
                            >
                              {project.title}
                            </Link>
                          </h3>
                          {project.date && (
                            <span className="text-sm text-zinc-500 whitespace-nowrap mt-1.5">
                              {new Date(project.date).getFullYear()}
                            </span>
                          )}
                        </div>

                        {project.excerpt && (
                          <p className="mb-4 text-base leading-relaxed text-zinc-600">
                            {project.excerpt}
                          </p>
                        )}

                        <div className="flex flex-wrap items-center gap-2">
                          {project.tags &&
                            project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 text-sm rounded-full bg-zinc-100 text-zinc-700"
                              >
                                {tag}
                              </span>
                            ))}
                        </div>
                      </article>
                      <div className="flex items-center">
                        <div
                          aria-hidden="true"
                          className="w-full border-t border-zinc-200"
                        />
                        <div className="relative flex justify-center">
                          <span className="px-2 bg-white text-zinc-500">
                            <MLetter className="w-4 h-4" />
                          </span>
                        </div>
                        <div
                          aria-hidden="true"
                          className="w-full border-t border-zinc-200"
                        />
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
