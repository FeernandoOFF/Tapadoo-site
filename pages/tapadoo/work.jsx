import React from 'react';
import { Layout } from '../../components/layout/Layout';

const WorkTiles = require('../../public/img/work-tiles.png');
import { tapadoo } from '../../site-data.json';

function Work() {
  return (
    <>
      <img
        src={WorkTiles.default.src}
        className=" max-w-[600px] w-full my-[10vh] md:my-0 absolute right-0 top-[8vh] lg:top-[20vh]"
      />
      <div className="hero min-h-[80vh] mt-[20vh] md:mt-0">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
          <div></div>
          <div className="max-w-2xl">
            <h1
              className="app-title"
              dangerouslySetInnerHTML={{
                __html: tapadoo.work.heading,
              }}
            />

            <p
              className="py-6"
              dangerouslySetInnerHTML={{
                __html: tapadoo.work.paragraph,
              }}
            />
          </div>
        </div>
      </div>
      <section className="testimonials app-container  ">
        <h1 className="text-4xl lg:text-6xl font-bold text-neutral mb-7">
          Testimonials
        </h1>
        <div className="testimonial-carrousel mb-[10vh]">
          <div className="carousel  carousel-center  p-4 space-x-4  rounded-box w-full">
            {tapadoo.work.testimonials.map((quote) => (
              <div
                key={quote.name}
                className="carousel-item bg-white min-w-[150px] max-w-[200px] lg:min-w-[300px] lg:max-w-[400px] min-h-[120px] rounded-box shadow-md border border-[#EFF0F6] flex flex-col p-5"
              >
                <p
                  className="text-sm"
                  dangerouslySetInnerHTML={{
                    __html: quote.quote,
                  }}
                />
                <h5
                  className="font-semibold my-1 text-sm mt-4"
                  dangerouslySetInnerHTML={{
                    __html: quote.name,
                  }}
                />

                <h6
                  className="font-light opacity-70 text-xs"
                  dangerouslySetInnerHTML={{
                    __html: quote.charge,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

Work.getLayout = (page) => (
  <Layout title="Testimonials | Tapdoo">{page}</Layout>
);
export default Work;
