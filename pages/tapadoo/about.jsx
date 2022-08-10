const aboutHero = require('../../public/img/about-hero.png');
import React from 'react';
import { Layout } from '../../components/layout/Layout';
// ../../public/img/assets

const team = [
  { label: 'Dermot', charge: 'CEO & Founder', twitter: '@dermdaly' },
  {
    label: 'Peter Macmahon',
    charge: 'Senior Project Manager',
  },
  {
    label: 'Eddie Martin',
    charge: 'The cyclist ',
  },
  {
    label: 'John Keyes',
    charge: 'The code master',
  },
  {
    label: 'Erencan Cabuk',
    charge: 'The push up king',
  },
];

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
            <h1 className="app-title">We are Tapadoo.</h1>
            <p className="py-6 text-base lg:text-lg  font-normal ">
              We are a team of App Development Specialists. Founded in 2009,
              shortly after the release of the iPhone SDK, Tapadoo was created
              to focus on mobile app development. This is a focus that remains
              to this day. We develop for iOS and Android, including production
              of back end systems to support these apps. The team consists of
              Designers, Developers, Project Managers and QA Specialists. We
              value long-term customer relationships; we&lsquo;ve worked with
              most of our customers for many years. Each of these started with a
              single project.
            </p>
            <p className="my-4 font-medium">
              Are we your next development partner?
            </p>
            <button className="px-4 py-2 rounded-3xl btn-primary text-white mx-auto">
              Tell us about your project
            </button>
          </div>
        </div>
      </section>
      <section className="team app-container  mt-[10vh]">
        <h1 className="text-4xl lg:text-6xl font-bold text-neutral">Team</h1>
        <div className=" team-grid mt-[5vh] grid grid-cols-2 md:grid-cols-4 gap-y-8  mx-auto ">
          {team.map((member) => (
            <div key={member.label} className="text-center text-sm my-4">
              <div className="circle w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] mx-auto bg-gray-300 rounded-full"></div>
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
