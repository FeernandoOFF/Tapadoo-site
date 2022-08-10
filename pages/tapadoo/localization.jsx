const locationSvg = require('../../public/img/assets/location-svg.svg');
import React from 'react';
import { Layout } from '../../components/layout/Layout';

export default function Localization() {
  return (
    <div className="hero min-h-[90vh] relative">
      <img
        src={locationSvg}
        alt="map svg"
        className="absolute  h-screen md:bottom-[-25vh]  right-0 z-[-1]"
      />
      <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9527.198742431867!2d-6.2647209!3d53.3468419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd0ad7b5e4cb529d8!2sTapadoo!5e0!3m2!1sen!2sie!4v1660056286127!5m2!1sen!2sie"
            loading="lazy"
            className="mask mask-circle my-[10vh] w-full min-w-[200px] min-h-[200px] aspect-square  lg:min-w-[350px] lg:min-h-[350px] "
          ></iframe>
        </div>
        <div className="max-w-xl">
          <h1 className="app-title mb-[5vh]">We are Here!</h1>
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
