import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Mobile App Development Dublin Ireland</title>
      </Head>
      <main className="w-screen h-screen bg-yellow-400 grid place-items-center">
        <div className="cont max-w-lg text-center  text-white">
          <h1 className="text-white font-semibold text-5xl">We're Tapadoo</h1>
          <h1 className="text-white font-semibold text-5xl">
            We make mobile apps
          </h1>
          <p>
            Let's see if we can help. What would you like to know more about?
          </p>
          <div className="buttons flex justify-between">
            <button>Tapadoo</button>
            <button>Apps</button>
          </div>
        </div>
      </main>
    </>
  );
}
