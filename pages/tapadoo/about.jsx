import Link from 'next/link';
import React from 'react';
import { Layout } from '../../components/layout/Layout';

import siteData from '../../site-data.json';
const aboutHero = require('../../public/img/about-hero.png');

function About() {
  return (
    <div className="container mx-auto">
      <section className="hero min-h-[80vh] text-neutral ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={aboutHero.default.src}
            className=" max-w-[550px] w-full my-[10vh] md:my-0"
          />
          <div>
            <h1
              className="app-title"
              dangerouslySetInnerHTML={{
                __html: siteData.tapadoo.about.heading,
              }}
            ></h1>
            <p
              className="py-6 text-base lg:text-lg font-normal "
              dangerouslySetInnerHTML={{
                __html: siteData.tapadoo.about.paragraph,
              }}
            />
            <p className="my-4 font-medium">
              Are we your next development partner?
            </p>
            <Link href="/tapadoo/contact">
              <button className="px-4 py-2 rounded-3xl btn-primary text-white mx-auto">
                Tell us about your project
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="team app-container  mt-[10vh]">
        <h1 className="text-4xl lg:text-6xl font-bold text-neutral">Team</h1>
        <div className=" team-grid mt-[5vh] grid grid-cols-2 md:grid-cols-4 gap-y-8  mx-auto ">
          {siteData.tapadoo.about.team.map((member) => (
            <div key={member.label} className="text-center text-sm my-4">
              <div
                className="circle w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] mx-auto bg-gray-300 rounded-full"
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: 'cover',
                }}
              />
              <p className="font-semibold">{member.label} </p>
              <p>{member.charge} </p>
              <p>{member.twitter} </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

About.getLayout = (page) => <Layout title="About | Tapadoo">{page}</Layout>;
export default About;
