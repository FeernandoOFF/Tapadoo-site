import React from 'react';
import { Layout } from '../../components/layout/Layout';

const locationSvg = require('../../public/img/assets/location-svg.svg');
import { tapadoo } from '../../site-data.json';

export default function Localization() {
  return (
    <div className="hero min-h-[90vh] relative">
      <img
        src={locationSvg.default.src}
        alt="map svg"
        className="absolute  h-screen md:bottom-[-25vh]  right-0 z-[-1]"
      />
      <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9527.198742431867!2d-6.2647209!3d53.3468419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd0ad7b5e4cb529d8!2sTapadoo!5e0!3m2!1sen!2sie!4v1660056286127!5m2!1sen!2sie"
            loading="lazy"
            className="mask mask-circle my-[10vh] w-full min-w-[200px] min-h-[200px] aspect-square  lg:min-w-[350px] lg:min-h-[350px]  shadow-xl"
          ></iframe>
        </div>
        <div className="max-w-xl">
          <h1
            className="app-title mb-[5vh]"
            dangerouslySetInnerHTML={{
              __html: tapadoo.location.heading,
            }}
          ></h1>
          <p
            className="py-6"
            dangerouslySetInnerHTML={{
              __html: tapadoo.location.paragraph,
            }}
          />
        </div>
      </div>
    </div>
  );
}

Localization.getLayout = (page) => (
  <Layout title="Location | Tapadoo">{page}</Layout>
);
