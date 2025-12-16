import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { getSortedProjectsData } from "../../../lib/projects";
import Header from "../../../components/Header";

export default function Project({
  title,
  date,
  details,
  content,
  prev,
  next,
  excerpt,
  tags,
}) {
  const router = useRouter();
  const pageTitle = `${title} - Maxime Laforet`;

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft" && prev) {
        router.push(`/projects/${prev.id}`);
      } else if (event.key === "ArrowRight" && next) {
        router.push(`/projects/${next.id}`);
      } else if (event.key === "Escape") {
        router.push("/");
      }
    },
    [prev, next, router]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="author" content="Maxime Laforet" />
        <meta name="description" content={excerpt || `Project: ${title}`} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:image" content="/maxime-laforet.jpg" />
        <meta
          property="og:description"
          content={excerpt || `Project: ${title}`}
        />
        <meta property="og:url" content="https://macx.im" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@macxim" />
      </Head>

      <Header />

      <main className="min-h-screen px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Back to Home + Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="flex items-center gap-2 transition-colors text-zinc-600 hover:text-zinc-900"
            >
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back Home</span>
            </Link>

            {/* Project Navigation */}
            <div className="flex gap-2">
              {prev ? (
                <Link
                  href={`/projects/${prev.id}`}
                  className="p-2 transition-colors bg-white border rounded-lg border-zinc-200 hover:bg-zinc-50"
                  title={`Previous: ${prev.title}`}
                >
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </Link>
              ) : (
                <div className="p-2 opacity-0">
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
              )}

              {next ? (
                <Link
                  href={`/projects/${next.id}`}
                  className="p-2 transition-colors bg-white border rounded-lg border-zinc-200 hover:bg-zinc-50"
                  title={`Next: ${next.title}`}
                >
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ) : (
                <div className="p-2 opacity-0">
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Project Content */}
          <article className="overflow-hidden bg-white border shadow-sm rounded-2xl border-zinc-200">
            {/* Header */}
            <header className="px-8 py-10 border-b lg:px-12 lg:py-12 border-zinc-200">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h1 className="text-4xl font-bold lg:text-5xl text-zinc-900">
                  {title}
                </h1>
                {date && (
                  <span className="mt-2 text-sm text-zinc-500 whitespace-nowrap">
                    {new Date(date).getFullYear()}
                  </span>
                )}
              </div>

              {excerpt && (
                <p className="mb-6 text-xl leading-relaxed text-zinc-600">
                  {excerpt}
                </p>
              )}

              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-zinc-100 text-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Content */}
            <div className="px-8 py-10 lg:px-12 lg:py-12">
              {content && (
                <div
                  className="prose prose-lg prose-zinc max-w-none
                    prose-headings:font-bold prose-headings:text-zinc-900
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                    prose-p:text-zinc-700 prose-p:leading-relaxed
                    prose-a:text-zinc-900 prose-a:underline hover:prose-a:text-zinc-600
                    prose-strong:text-zinc-900 prose-strong:font-bold
                    prose-ul:my-6 prose-li:my-2
                    prose-code:text-zinc-900 prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}

              {/* Project Images */}
              {details && details.length > 0 && (
                <div className="mt-16 space-y-8">
                  {details.map((img, index) => (
                    <a
                      href={img}
                      key={img}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="relative overflow-hidden rounded-xl bg-zinc-100">
                        <Image
                          src={img}
                          alt={`${title} screenshot ${index + 1}`}
                          className="w-full transition-transform duration-300 group-hover:scale-105"
                          width={1200} // adjust to your real image size
                          height={675} // keep aspect ratio
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Navigation */}
            <footer className="px-8 py-8 border-t lg:px-12 border-zinc-200 bg-zinc-50">
              <div className="flex items-center justify-between">
                {prev ? (
                  <Link
                    href={`/projects/${prev.id}`}
                    className="flex items-center gap-3 group max-w-[45%]"
                  >
                    <div className="p-2 transition-colors bg-white border rounded-lg border-zinc-200 group-hover:bg-zinc-100">
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
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="mb-1 text-sm text-zinc-500">Previous</div>
                      <div className="font-medium truncate transition-colors text-zinc-900 group-hover:text-zinc-600">
                        {prev.title}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {next ? (
                  <Link
                    href={`/projects/${next.id}`}
                    className="flex items-center gap-3 group max-w-[45%] ml-auto"
                  >
                    <div className="min-w-0 text-right">
                      <div className="mb-1 text-sm text-zinc-500">Next</div>
                      <div className="font-medium truncate transition-colors text-zinc-900 group-hover:text-zinc-600">
                        {next.title}
                      </div>
                    </div>
                    <div className="p-2 transition-colors bg-white border rounded-lg border-zinc-200 group-hover:bg-zinc-100">
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </footer>
          </article>
        </div>
      </main>
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
