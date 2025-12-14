import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import { getSortedProjectsData } from "../lib/projects";

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
        <title>Maxime Laforet - Design Engineer</title>
        <meta name="author" content="Maxime Laforet" />
        <meta
          name="description"
          content="Design engineer specializing in Next.js, React, and TypeScript. Building polished interfaces where design and code meet."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:title" content="Maxime Laforet - Design Engineer" />
        <meta property="og:image" content="/maxime-laforet.jpg" />
        <meta
          property="og:description"
          content="Design engineer specializing in Next.js, React, and TypeScript"
        />
        <meta property="og:url" content="https://macx.im" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@macxim" />
      </Head>
      <Header />

      <main className="flex flex-col items-center max-w-4xl px-4 mb-16 overflow-x-hidden overflow-y-auto sm:min-w-4xl lg:p-0">
        <div className="absolute left-0 flex items-center justify-center hidden p-8 top-1/2 left-1/2 md:block">
          <div className="bg-gradient-to-tr from-zinc-50 to-zinc-600 rounded-full w-[500px] h-[200px] absolute -rotate-12 blur-2xl -left-[64px] -top-[170px] opacity-30 md:opacity-100" />
          <div className="bg-gradient-to-bl from-orange-300 to-orange-600 rounded-full w-[500px] h-[180px] z-[-1] absolute blur-2xl -right-8 -top-8 rotate-8 opacity-30 md:opacity-100" />
        </div>
        <header className="flex-1 p-[0.5px] text-2xl leading-normal rounded-md shadow-sm bg-gradient-to-l from-zinc-50 via-zinc-300 to-zinc-100">
          <div className="p-6 border rounded-md md:p-8 bg-white/90 backdrop-blur-sm border-zinc-900/5">
            <Image
              src="/maxime-laforet.jpg"
              alt="Maxime Laforet"
              width={80}
              height={80}
              className="mb-6 border-2 rounded-full border-zinc-200"
              priority
            />

            <h1 className="mb-4 text-4xl">Hello, I&apos;m Maxime</h1>
            <p>
              Front-end developer and designer who builds responsive web
              applications. I specialize in translating design mockups into
              clean, maintainable code using React, Next.js, and modern CSS.
            </p>

            <p className="mt-2">
              Over the past decade, I&apos;ve worked on everything from
              blockchain platforms to enterprise SaaS tools. I&apos;m most
              interested in projects where I can contribute to both the
              interface design and the technical implementation.
            </p>
            <p className="mt-2">
              Based in Tenerife, Spain, working remotely with clients worldwide.
            </p>

            <p className="mt-4">
              Looking for a collaborator?{" "}
              <a
                href="mailto:me@macx.im"
                className="font-semibold text-orange-600 transition duration-150 ease-in-out hover:text-orange-900 focus:outline-none focus:text-orange-700"
              >
                Get in touch!
              </a>
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
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
        </header>
      </main>

      <section className="flex flex-col items-center max-w-4xl px-4 mb-24 overflow-x-hidden overflow-y-auto sm:min-w-4xl lg:p-0">
        <div className="w-full p-6 border rounded-md md:p-8 bg-zinc-800 border-zinc-900/5">
          <h2 className="mb-8 text-3xl text-white">Work</h2>

          <div className="space-y-24">
            {allProjectsData.map((project, index) => (
              <article key={project.id} className="group">
                <Link href={`/projects/${project.id}`}>
                  <div className="relative block mb-4 overflow-hidden rounded-lg cursor-pointer bg-zinc-100 aspect-video">
                    <Image
                      src={project.thumb}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                    <div className="absolute inset-0 z-10 transition-colors duration-300 bg-black/0 group-hover:bg-black/10" />
                  </div>
                </Link>

                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-2xl font-bold text-zinc-200">
                    <Link
                      href={`/projects/${project.id}`}
                      className="transition-colors hover:text-zinc-300"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  {project.date && (
                    <span className="mt-1 text-base text-zinc-300 whitespace-nowrap">
                      {new Date(project.date).getFullYear()}
                    </span>
                  )}
                </div>

                {project.excerpt && (
                  <p className="mb-3 text-lg leading-relaxed text-zinc-200">
                    {project.excerpt}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-3">
                  {project.tags &&
                    project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-zinc-50 text-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
