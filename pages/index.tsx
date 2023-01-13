import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MLetter from '../components/m'


export default function Home() {
  return (
    <>
      <Head>
        <title>Maxime Laforet</title>
        <meta name="author" content="Maxime Laforet" />
        <meta name="description" content="Personal website of Maxime Laforet, front-end / UX developer" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:title" content="Maxime Laforet" />
        <meta property="og:image" content="/maxime-laforet.jpg" />
        <meta property="og:description" content="Personal website of Maxime Laforet, front-end / UX developer" />
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
          Work
        </Link>
      </header>
      <main className="flex flex-col items-center max-w-4xl px-8 mb-24 overflow-x-hidden overflow-y-auto lg:p-0">
        <div className="absolute left-0 flex items-center justify-center hidden p-8 top-1/2 left-1/2 md:block">
          <div className="bg-gradient-to-tr from-zinc-50 to-zinc-600 rounded-full w-[500px] h-[200px] absolute -rotate-12 blur-2xl -left-[64px] -top-[170px] opacity-30 md:opacity-100" />
          <div className="bg-gradient-to-bl from-orange-300 to-orange-600 rounded-full w-[500px] h-[180px] z-[-1] absolute blur-2xl -right-8 -top-8 rotate-8 opacity-30 md:opacity-100" />
        </div>
        <section className="flex-1 p-[0.5px] text-2xl leading-normal rounded-md shadow-sm bg-gradient-to-l from-zinc-50 via-zinc-300 to-zinc-100 ">
          <div className="p-6 border rounded-md md:p-8 bg-white/90 backdrop-blur-sm border-zinc-900/5">
            <img src="/maxime-laforet.jpg" alt="A picture of Maxime Laforet" className="w-24 h-24 mb-6 ease-in border-4 border-white rounded-full shadow-md" loading="lazy" />
            <h1 className="mb-4 text-4xl">Hello, I&apos;m Maxime</h1>
            <p>I like building beautiful and responsive websites ✨.</p>

            <p className="mt-1">I am a <a className="font-semibold text-orange-600 transition duration-150 ease-in-out hover:text-orange-900 focus:outline-none focus:text-orange-700" href="https://ux.shopify.com/why-we-have-user-experience-developers-at-shopify-712a99410365" title="What is a UX developer?">UX developer</a>.</p>

            <p className="mt-1">When not working, I enjoy spending time with my family 👨‍👩‍👧‍👦 or playing table tennis 🏓.</p>

            <div className="mt-8 sm:flex sm:justify-between">
              <ul className="flex space-x-4">
                <li>
                  <a title="Twitter" href="https://twitter.com/macxim"><svg className="w-6 h-6 text-gray-900 transition duration-500 opacity-25 fill-current hover:opacity-100 filter-grayscale hover:filter-none"><use xlinkHref="#macxim-Svg--twitter" /></svg></a>
                </li>
                <li>
                  <a title="GitHub" href="https://github.com/macxim/"><svg className="w-6 h-6 text-gray-900 transition duration-500 opacity-25 fill-current hover:opacity-100 filter-grayscale hover:filter-none"><use xlinkHref="#macxim-Svg--github" /></svg></a>
                </li>
                <li>
                  <a title="LinkedIn" href="https://www.linkedin.com/in/maximelaforet"><svg className="w-6 h-6 text-gray-900 transition duration-500 opacity-25 fill-current hover:opacity-100 filter-grayscale hover:filter-none"><use xlinkHref="#macxim-Svg--linkedin" /></svg></a>
                </li>
                <li>
                  <a title="Instagram" href="https://www.instagram.com/macx1m/"><svg className="w-6 h-6 text-gray-900 transition duration-500 opacity-25 fill-current hover:opacity-100 filter-grayscale hover:filter-none"><use xlinkHref="#macxim-Svg--instagram" /></svg></a>
                </li>
              </ul>

              <p className="mt-4 sm:mt-0 text-sm text-zinc-600 rounded-lg px-2 py-0.5 bg-zinc-50 border border-zinc-100">Last updated on <span className="font-semibold text-zinc-900"><time dateTime="2023-01-12" title="Thursday the 12th of January, 2023">2023-01-12</time></span></p>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}
