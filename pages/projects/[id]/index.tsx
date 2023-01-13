import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MLetter from '../../../components/m'
import matter from 'gray-matter'


export default function Work({ title, date, details }) {
  const pageTitle = `Maxime Laforet - Work - Project: ${title}`
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="author" content="Maxime Laforet" />
        <meta name="description" content={`Personal website of Maxime Laforet, front-end / UX developer — Project: ${title}`} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:title" content={`Maxime Laforet — Project: ${title}`} />
        <meta property="og:image" content="/maxime-laforet.jpg" />
        <meta property="og:description" content={`Personal website of Maxime Laforet, front-end / UX developer — Project: ${title}`} />
        <meta property="og:url" content="https://macx.im" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@macxim" />
      </Head>
      <header className="absolute top-0 left-0 w-full h-24">
        <Link
          href="/"
          className="absolute w-8 h-8 top-8 left-8"
        >
          <MLetter />
        </Link>
        <Link
          href="/work"
          className="absolute text-2xl font-semibold transition duration-150 ease-in-out top-8 right-8 hover:text-orange-600 focus:outline-none focus:text-orange-700"
        >
          <svg className="w-8 h-8 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700">
            <path d="M249.2 199.36h-79.801a16.8 16.8 0 0 1-16.797-16.8v-79.798c0-4.457 1.77-8.73 4.918-11.883a16.813 16.813 0 0 1 11.879-4.918H249.2a16.8 16.8 0 0 1 16.8 16.801v79.797c0 4.457-1.769 8.73-4.921 11.88a16.787 16.787 0 0 1-11.879 4.921zm142.13 0h-79.801a16.8 16.8 0 0 1-16.8-16.8v-79.798c0-4.457 1.769-8.73 4.921-11.883a16.813 16.813 0 0 1 11.879-4.918h79.801a16.8 16.8 0 0 1 16.8 16.801v79.797c0 4.457-1.769 8.73-4.921 11.88a16.787 16.787 0 0 1-11.879 4.921zm142.07 0h-79.797a16.8 16.8 0 0 1-16.801-16.8v-79.798c0-4.457 1.77-8.73 4.918-11.883a16.815 16.815 0 0 1 11.883-4.918H533.4c4.457 0 8.73 1.77 11.883 4.918a16.815 16.815 0 0 1 4.918 11.883v79.797A16.8 16.8 0 0 1 533.4 199.36zm-284.2 140h-79.801a16.8 16.8 0 0 1-16.797-16.8v-79.798c0-4.457 1.77-8.73 4.918-11.883a16.813 16.813 0 0 1 11.879-4.918H249.2a16.8 16.8 0 0 1 16.8 16.801v79.797c0 4.457-1.769 8.73-4.921 11.88a16.787 16.787 0 0 1-11.879 4.921zm142.13 0h-79.801a16.8 16.8 0 0 1-16.8-16.8v-79.798c0-4.457 1.769-8.73 4.921-11.883a16.813 16.813 0 0 1 11.879-4.918h79.801a16.8 16.8 0 0 1 16.8 16.801v79.797c0 4.457-1.769 8.73-4.921 11.88a16.787 16.787 0 0 1-11.879 4.921zm142.07 0h-79.797a16.8 16.8 0 0 1-16.801-16.8v-79.798c0-4.457 1.77-8.73 4.918-11.883a16.815 16.815 0 0 1 11.883-4.918H533.4c4.457 0 8.73 1.77 11.883 4.918a16.815 16.815 0 0 1 4.918 11.883v79.797A16.8 16.8 0 0 1 533.4 339.36zm-284.2 140h-79.801a16.8 16.8 0 0 1-16.797-16.8v-79.798c0-4.457 1.77-8.73 4.918-11.883a16.813 16.813 0 0 1 11.879-4.918H249.2a16.8 16.8 0 0 1 16.8 16.801v79.797c0 4.457-1.769 8.73-4.921 11.88a16.787 16.787 0 0 1-11.879 4.921zm142.13 0h-79.801a16.8 16.8 0 0 1-16.8-16.8v-79.798c0-4.457 1.769-8.73 4.921-11.883a16.813 16.813 0 0 1 11.879-4.918h79.801a16.8 16.8 0 0 1 16.8 16.801v79.797c0 4.457-1.769 8.73-4.921 11.88a16.787 16.787 0 0 1-11.879 4.921zm142.07 0h-79.797a16.8 16.8 0 0 1-16.801-16.8v-79.798c0-4.457 1.77-8.73 4.918-11.883a16.815 16.815 0 0 1 11.883-4.918H533.4c4.457 0 8.73 1.77 11.883 4.918a16.815 16.815 0 0 1 4.918 11.883v79.797A16.8 16.8 0 0 1 533.4 479.36z"/>
          </svg>
        </Link>
      </header>
      <main className="flex flex-col items-center max-w-6xl px-8 mb-24 lg:p-0">
        <div className="absolute left-0 flex items-center justify-center hidden p-8 top-1/2 left-1/2 md:block">
          <div className="bg-gradient-to-tr from-zinc-50 to-zinc-600 rounded-full w-[500px] h-[200px] absolute -rotate-12 blur-2xl -left-[64px] -top-[170px] opacity-30 md:opacity-100" />
          <div className="bg-gradient-to-bl from-orange-300 to-orange-600 rounded-full w-[500px] h-[180px] z-[-1] absolute blur-2xl -right-8 -top-8 rotate-8 opacity-30 md:opacity-100" />
        </div>
        <section className="mt-6 sm:mt-32 flex-1 p-[0.5px] text-2xl leading-normal rounded-md shadow-sm bg-gradient-to-l from-zinc-50 via-zinc-300 to-zinc-100 ">
          <div className="p-6 border rounded-md md:p-8 bg-white/90 backdrop-blur-sm border-zinc-900/5">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-4xl">{title}</h1>

              <p className="text-sm text-zinc-600 rounded-lg px-2 py-0.5 bg-zinc-50 border border-zinc-100"><span className="font-semibold text-zinc-900"><time dateTime={date}>{date}</time></span></p>
            </div>
            <div className="space-y-12">
              {details && details.map((img) => (
                <a href={img} className="block" key={img}>
                  <img className="mx-auto" src={img} alt="" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}


export async function getStaticPaths() {
  const fs = require('fs')
  const path = require('path')

  const paths = fs
    .readdirSync(path.join(process.cwd(), `./projects/`))
    .map((path) => path.replace(/\.md?$/, ''))
    .map((id) => ({ params: { id } }));

  return { paths, fallback: false }
}

export function getStaticProps(context) {
  const fs = require('fs')
  const path = require('path')
  const projectId = context.params.id

  const projectData = fs.readFileSync(path.join(process.cwd(), `./projects/${projectId}.md`,), 'utf8')
  const matterResult = matter(projectData)

  return {
    props: {
      ...matterResult.data
    },
  }
}
