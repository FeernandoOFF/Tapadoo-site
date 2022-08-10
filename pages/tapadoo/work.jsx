const WorkTiles = require('../../public/img/work-tiles.png');

import React from 'react';
import { Layout } from '../../components/layout/Layout';

function Work() {
  return (
    <>
      <img
        src={WorkTiles}
        className=" max-w-[600px] w-full my-[10vh] md:my-0 absolute right-0 top-[8vh] lg:top-[20vh]"
      />
      <div className="hero min-h-[80vh] mt-[20vh] md:mt-0">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
          <div></div>
          <div className="max-w-2xl">
            <h1 className="app-title">Who do we work with?</h1>
            <p className="py-6">
              We work with a wide range of clients. Our focus is on fostering
              long-term relationships with them - Our aim is to be their
              &quot;Mobile App Department&quot;.
              <br />
              We have many clients with whom we have worked for over 5 years,
              and we pride ourselves in maintaining good relationships with
              them.
              <br /> Broadly speaking we work in FinTech, MedTech, Pharma and
              Utilities.
            </p>
          </div>
        </div>
      </div>
      <section className="testimonials app-container  ">
        <h1 className="text-4xl lg:text-6xl font-bold text-neutral mb-7">
          Testimonials
        </h1>
        <div className="testimonial-carrousel mb-[10vh]">
          <div className="carousel  carousel-center  p-4 space-x-4  rounded-box w-full">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16].map(
              (member) => (
                <div
                  key={member}
                  className="carousel-item bg-white min-w-[150px] max-w-[200px] lg:min-w-[300px] lg:max-w-[400px] min-h-[120px] rounded-box shadow-md border border-[#EFF0F6] flex flex-col p-5"
                >
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua quis nostrud exercitation ullamco
                  </p>
                  <h5 className="font-semibold my-1 text-sm mt-4">
                    Fernando Obregon
                  </h5>
                  <h6 className="font-light opacity-70 text-xs">
                    Product Developer at Company Name
                  </h6>
                  {/* <img
                  src="https://placeimg.com/250/180/arch"
                  className="rounded-box"
                /> */}
                </div>
              )
            )}
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
