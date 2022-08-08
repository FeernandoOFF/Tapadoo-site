import React from 'react';
import { Layout } from '../../components/layout/Layout';

function Careers() {
  return (
    <div className="hero min-h-screen app-container place-items-start md:place-items-center">
      <div className="hero-content flex-col justify-center items-center lg:flex-row-reverse lg:justify-between w-full">
        <div className="flex w-full flex-col items-center max-w-[300px] lg:flex-row  lg:justify-between lg:w-1/2 lg:max-w-[800px]">
          <div className="bg-primary p-4 my-4 w-full  rounded-2xl flex flex-col text-white lg:max-w-[230px] lg:min-h-[250px]  lg:min-w-[200px] justify-between shadow-lg hiring-card-primary">
            <p className="text-left text-xl w-1/3 mb-2">IOS Developer</p>
            <button className="px-4 py-2 text-sm bg-white rounded-3xl text-black">
              See Role
            </button>
          </div>
          <div className="bg-secondary p-4 my-4 w-full  rounded-2xl flex flex-col text-white lg:max-w-[230px] lg:min-h-[250px]  lg:min-w-[200px] justify-between shadow-lg hiring-card-secondary">
            <p className="text-left text-xl w-1/3 mb-2">Android Developer</p>
            <button className="px-4 py-2 text-sm bg-white rounded-3xl text-black">
              See Role
            </button>
          </div>
        </div>
        <div className="max-w-md">
          <h1 className="app-title">Yes, We do!</h1>
          <p className="py-6">
            We&lsquo;re always on the lookout for talented iOS and Android
            developers. Our current openings are listed below. If we currently
            don&lsquo;t have an opening, but you&lsquo;d like to be considered
            for future roles, do drop us a mail with your CV.
          </p>
          <button className="btn btn-primary rounded-3xl text-white w-full md:max-w-[250px]  text-sm">
            Send Us your CV
          </button>
        </div>
      </div>
    </div>
  );
}

Careers.getLayout = (page) => (
  <Layout title="Careers | Tapadoo"> {page} </Layout>
);
export default Careers;
