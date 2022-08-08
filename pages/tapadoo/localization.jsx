import React from 'react';
import { Layout } from '../../components/layout/Layout';

export default function Localization() {
  return (
    <div className="hero min-h-[90vh]">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
        <div>
          <div className="w-[200px] h-[200px]  bg-gray-300 rounded-full my-[10vh]"></div>
        </div>
        <div className="max-w-xl">
          <h1 className="app-title">We are Here!</h1>
          <p className="py-6">
            Our office is located in 26-28 Strand Street Great, Dublin 1.
            We&lsquo;re right in the heart of Dublin city centre. Most of our
            team work out of the office, although we do have remote staff too.
            We have team members in Spain, Germany, and in other parts of
            Ireland too.
          </p>
        </div>
      </div>
    </div>
  );
}

Localization.getLayout = (page) => (
  <Layout title="Location | Tapadoo">{page}</Layout>
);
