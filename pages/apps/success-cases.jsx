import React from 'react';
import { Layout } from '../../components/layout/Layout';

import { apps } from '../../site-data.json';

function Cases() {
  return (
    <div>
      <div className="md:carousel carousel-center flex-col md:flex-row    ml-auto w-[100vw] mx-auto py-[10vh]">
        {apps.successCases.projects.map((app) => (
          <AppItem app={app} key={app.name}></AppItem>
        ))}
      </div>
      <div className="hidden md:flex justify-center w-full py-2 gap-2 mb-[15vh]">
        {apps.successCases.projects.map(({ name }, i) => (
          <a key={i} href={`#app-${name}`} className="btn btn-xs bg-gray-200">
            {i}
          </a>
        ))}
      </div>
    </div>
  );
}

function AppItem({ app }) {
  return (
    <div
      id={`app-${app.name}`}
      className={` carousel-item  flex-col md:flex-row w-4/5 my-8  shadow-xl rounded-xl  min-h-[500px] mx-auto md:mx-[2vw] p-8 bg-white justify-between  `}
    >
      <div className="w-full md:text-left text-center  lg:w-1/3">
        <h2
          className="app-title text-xl md:text-4xl mb-8"
          dangerouslySetInnerHTML={{
            __html: app.name,
          }}
        />
        <p
          className="font-semibold text-lg"
          dangerouslySetInnerHTML={{
            __html: app.client,
          }}
        />
        <p
          className="my-6"
          dangerouslySetInnerHTML={{
            __html: app.description,
          }}
        />
        <div className="categories flex w-1/3 justify-between mx-auto md:ml-0">
          {app.tags.map((tag) => (
            <button
              key={tag}
              className="btn btn-ghost border-primary text-primary mr-4"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="md:flex  flex-nowrap gap-4 carousel carousel-center mt-8">
        {app.images.map((url) => (
          <img
            key={url}
            src={url}
            alt={`${app.name}-Tapdoo`}
            className="rounded-box"
          />
        ))}
      </div>
    </div>
  );
}

Cases.getLayout = (page) => (
  <Layout title="Cases of study? | Tapdoo">{page}</Layout>
);
export default Cases;
