import React from 'react';
import { Layout } from '../../components/layout/Layout';

import { apps } from '../../site-data.json';

function Costs() {
  return (
    <>
      <div className="hero min-h-[80vh]  md:mt-0  mx-auto">
        <div className="hero-content flex-col-reverse lg:flex-row justify-between w-full  max-w-[1200px]">
          <div className="max-w-2xl w-full md:w-1/2">
            <h1
              className="app-title text-3xl lg:text-5xl mt-8"
              dangerouslySetInnerHTML={{
                __html: apps.costs.heading,
              }}
            />
            <p
              className="py-6 text-neutral opacity-70 font-light"
              dangerouslySetInnerHTML={{
                __html: apps.costs.paragraph,
              }}
            />
          </div>
          <div className="costs-container flex flex-col   w-full md:w-1/2 md:ml-10 text-base max-w-[600px] ">
            <div className="w-full shadow-xl my-4 rounded-lg p-6 gap-8 flex flex-nowrap justify-start items-center">
              <div>
                <div className="h-10 w-10 rounded-lg bg-gray-100 relative">
                  <div className="small w-4 h-4 bg-[#C0AEA5] opacity-80 rounded-md absolute left-1 top-1"></div>
                </div>
              </div>
              <p>
                A <b>small </b> project would have a budget in the
                <span className="text-success">{apps.costs.smallProject} </span>
                range per platform.
              </p>
            </div>
            <div className="w-full shadow-xl my-4 rounded-lg p-6 gap-8 flex flex-nowrap justify-start items-center">
              <div>
                <div className="h-10 w-10 rounded-lg bg-gray-100 relative">
                  <div className="medium w-6 h-6 bg-[#90786B] opacity-80 rounded-md absolute left-1 top-1"></div>
                </div>
              </div>
              <p>
                A <b>medium</b> project would have a budget in the
                <span className="text-success">
                  {' '}
                  {apps.costs.mediumProject}
                </span>
                range per platform.
              </p>
            </div>
            <div className="w-full shadow-xl my-4 rounded-lg p-6 gap-8 flex flex-nowrap justify-start items-center">
              <div>
                <div className="h-10 w-10 rounded-lg bg-[#5A473D] relative opacity-90"></div>
              </div>
              <p>
                A <b>larger</b> project would have a budget in excess of{' '}
                <span className="text-success">
                  {' '}
                  {apps.costs.largeProject}{' '}
                </span>
                per platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Costs.getLayout = (page) => (
  <Layout title="How much does an app cost? | Tapdoo">{page}</Layout>
);
export default Costs;
