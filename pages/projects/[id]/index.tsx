import Head from "next/head";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { getSortedProjectsData } from "../../../lib/projects";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";

export default function Project({ title, date, details, content, prev, next }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const pageTitle = `Maxime Laforet - Work - Project: ${title}`;

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft" && prev) {
        router.push(`/projects/${prev.id}`);
      } else if (event.key === "ArrowRight" && next) {
        router.push(`/projects/${next.id}`);
      } else if (event.key === "Escape") {
        router.push("/work");
      }
    },
    [prev, next, router]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (details) {
      setLoading(false);
    }
  }, [details]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="author" content="Maxime Laforet" />
        <meta
          name="description"
          content={`Personal website of Maxime Laforet, front-end / UX developer — Project: ${title}`}
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content={`Maxime Laforet — Project: ${title}`}
        />
        <meta property="og:image" content="/maxime-laforet.jpg" />
        <meta
          property="og:description"
          content={`Personal website of Maxime Laforet, front-end / UX developer — Project: ${title}`}
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
          <main className="flex flex-col items-center w-full max-w-4xl px-4 mb-24 lg:p-0">
            <div className="absolute left-0 flex items-center justify-center hidden p-8 top-1/2 left-1/2 md:block">
              <div className="bg-gradient-to-tr from-zinc-50 to-zinc-600 rounded-full w-[500px] h-[200px] absolute -rotate-12 blur-2xl -left-[64px] -top-[170px] opacity-30 md:opacity-100" />
              <div className="bg-gradient-to-bl from-orange-300 to-orange-600 rounded-full w-[500px] h-[180px] z-[-1] absolute blur-2xl -right-8 -top-8 rotate-8 opacity-30 md:opacity-100" />
            </div>
            <section className="w-full max-w-4xl ml-auto">
              <div className="flex justify-end ml-0">
                <div>
                  {prev ? (
                    <a
                      className="inline-flex items-center justify-center px-4 py-2 border rounded-md shadow-sm bg-white/90 backdrop-blur-sm border-zinc-900/5 hover:bg-zinc-100/50 hover:rounded-l-md"
                      href={`/projects/${prev.id}`}
                    >
                      ←
                    </a>
                  ) : (
                    <div />
                  )}

                  {next ? (
                    <a
                      className="inline-flex items-center justify-center px-4 py-2 ml-2 border rounded-md shadow-sm bg-white/90 backdrop-blur-sm border-zinc-900/5 hover:bg-zinc-100/50 hover:rounded-r-md"
                      href={`/projects/${next.id}`}
                    >
                      →
                    </a>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </section>
            <section className="w-full max-w-4xl mt-6 flex-1 p-[0.5px] text-2xl leading-normal rounded-md shadow-sm bg-gradient-to-l from-zinc-50 via-zinc-300 to-zinc-100">
              <div className="p-6 border rounded-md md:p-8 bg-white/90 backdrop-blur-sm border-zinc-900/5">
                <div className="mb-6 sm:flex sm:items-center sm:justify-between">
                  <h1 className="mb-1 text-4xl sm:mb-0">{title}</h1>
                  <p className="inline sm:block text-sm text-zinc-600 rounded-lg px-2 py-0.5 bg-zinc-100 border border-zinc-200/80">
                    <span className="font-semibold text-zinc-900">
                      <time dateTime={date}>{date}</time>
                    </span>
                  </p>
                </div>
                <div className="space-y-12">
                  {content && (
                    <div
                      className="text-lg prose max-w-none"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  )}

                  {details &&
                    details.map((img) => (
                      <a href={img} className="block" key={img}>
                        <img
                          className="mx-auto"
                          src={img}
                          alt=""
                          loading="lazy"
                        />
                      </a>
                    ))}
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const fs = require("fs");
  const path = require("path");

  const paths = fs
    .readdirSync(path.join(process.cwd(), `./projects/`))
    .map((path) => path.replace(/\.md?$/, ""))
    .map((id) => ({ params: { id } }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const fs = require("fs");
  const path = require("path");
  const projectId = context.params.id;

  // Get sorted list of all projects
  const projects = getSortedProjectsData();
  const currentIndex = projects.findIndex(
    (project) => project.id === projectId
  );
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const projectData = fs.readFileSync(
    path.join(process.cwd(), `./projects/${projectId}.md`),
    "utf8"
  );
  const matterResult = matter(projectData);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      id: projectId,
      ...matterResult.data,
      content: contentHtml,
      prev,
      next,
    },
  };
}
