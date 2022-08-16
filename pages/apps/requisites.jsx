import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { apps } from '../../site-data.json';

function Requisites() {
  return (
    <>
      <div className="hero min-h-[80vh] mt-[20vh] md:mt-0  mx-auto">
        <div className="hero-content flex-col lg:flex-row justify-between w-full  max-w-[1200px]">
          <div className="max-w-2xl w-full md:w-2/5">
            <h1
              className="app-title text-5xl"
              dangerouslySetInnerHTML={{
                __html: apps.requisites.heading,
              }}
            />
            <p
              className="py-6 text-neutral opacity-70 font-light"
              dangerouslySetInnerHTML={{
                __html: apps.requisites.paragraph,
              }}
            />
          </div>
          <div className="question-container flex flex-col md:flex-row md:flex-wrap w-3/5 text-sm">
            {apps.requisites.questionList.map((item, index) => (
              <div
                key={item.recommendation}
                className="question flex flex-col md:flex-row w-full  gap-4 mb-3 justify-end mt-8"
              >
                <div className="mx-auto lg:ml-auto">
                  <div className="number  w-8 h-8 grid place-content-center text-white rounded-full bg-primary ">
                    <p className="mx-auto lg:ml-auto">{++index} </p>
                  </div>
                </div>
                <div className="question-list px-3 w-full md:text-left text-center md:w-2/5">
                  <ul>
                    {item.questions.map((question) => (
                      <li key={question} className="md:list-disc">
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="recommendation w-full text-center md:text-left md:w-1/3  mx-auto max-w-[250px] text-gray-600 opacity-70">
                  {item.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Requisites.getLayout = (page) => (
  <Layout title="Do you need an app? | Tapdoo">{page}</Layout>
);
export default Requisites;
