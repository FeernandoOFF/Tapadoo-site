const backgroundImg = require('../public/main-background.png');
import Head from 'next/head';
import Link from 'next/link';
import siteData from '../site-data.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Mobile App Development Dublin Ireland</title>
      </Head>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImg.default.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl text-white">
            <h1
              className="mb-5 text-3xl lg:text-6xl font-bold"
              dangerouslySetInnerHTML={{ __html: siteData.main.heading }}
            ></h1>
            <p
              className="mb-5 text-base lg:text-xl opacity-60"
              dangerouslySetInnerHTML={{ __html: siteData.main.paragraph }}
            ></p>
            <div className="flex flex-col md:flex-row md:justify-evenly items-center">
              <Link href="/tapadoo/about">
                <button className="btn rounded-3xl min-w-[250px] btn-primary w-1/2 md:w-1/3 text-black bg-white my-4 capitalize border-none">
                  Tapadoo
                </button>
              </Link>
              <Link href="/apps/requisites">
                <button className="btn rounded-3xl min-w-[250px] btn-primary w-1/2 md:w-1/3 text-black bg-white my-4 capitalize border-none">
                  Apps
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
