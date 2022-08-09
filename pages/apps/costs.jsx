import React from 'react';
import { Layout } from '../../components/layout/Layout';

const list = [
  {
    questions: [
      'Have you a website that provides functionality to your end-users?',
      'Are many of them arriving from mobile browsers?',
    ],
    recommendation:
      'These tend to be good indicators that you may need an app. Your users are already accessing your server on their phones and they would like to be kept logged in.',
  },
  {
    questions: [
      '      Is your product or service on offer something that is often purchased on a whim?',
      'Is there a context that makes purchase more likely.',
    ],
    recommendation:
      'This is another reason why you may need an app. You may be offering something timely.',
  },
  {
    questions: [
      "Are you early stage and think an app is key to your new idea's success ? ",
    ],
    recommendation: "We'd urge you to read further. Advice for startups",
  },
];

function Costs() {
  return (
    <>
      <div className="hero min-h-[80vh]  md:mt-0  mx-auto">
        <div className="hero-content flex-col-reverse lg:flex-row justify-between w-full  max-w-[1200px]">
          <div className="max-w-2xl w-full md:w-1/2">
            <h1 className="app-title text-3xl lg:text-5xl mt-8">
              App development Cost
            </h1>
            <p className="py-6 text-neutral opacity-70 font-light">
              It is very difficult to say what an app costs. This is because
              each app is unique, and built entirely for the client&lsquo;s
              purpose.
              <br />
              Each app can be thought of as something tailor-made for the
              client&lsquo;s needs. In simple terms, the cost of the app is
              proportional to the effort of creating it, which in turn is
              decided by the number of features and the complexity of those
              features; In addition, clients should consider that we develop
              natively for iOS and Android; these are very different platforms
              requiring specific code on each platform.
              <br />
              Each clients needs are very different so, we offer a discovery
              workshop to help gauge the size of the project. Of course we can
              work with the client to develop projects in stages to meet any
              budgetary constraints.
            </p>
          </div>
          <div className="costs-container flex flex-col   w-full md:w-1/2 md:ml-10 text-xs max-w-[600px] ">
            <div className="w-full shadow-xl my-4 rounded-lg p-6 gap-8 flex flex-nowrap justify-between">
              <div>
                <div className="h-10 w-10 rounded-lg bg-gray-100 relative">
                  <div className="small w-4 h-4 bg-neutral opacity-80 rounded-md absolute left-1 top-1"></div>
                </div>
              </div>
              <p>
                A <b>small </b> project would have a budget in the
                <span className="text-success"> 25 - 40k </span>
                range per platform.
              </p>
            </div>
            <div className="w-full shadow-xl my-4 rounded-lg p-6 gap-8 flex flex-nowrap justify-between">
              <div>
                <div className="h-10 w-10 rounded-lg bg-gray-100 relative">
                  <div className="medium w-6 h-6 bg-neutral opacity-80 rounded-md absolute left-1 top-1"></div>
                </div>
              </div>
              <p>
                A <b>medium</b> project would have a budget in the
                <span className="text-success"> 40k - 80k </span>
                range per platform.
              </p>
            </div>
            <div className="w-full shadow-xl my-4 rounded-lg p-6 gap-8 flex flex-nowrap justify-between">
              <div>
                <div className="h-10 w-10 rounded-lg bg-neutral relative opacity-90"></div>
              </div>
              <p>
                A <b>larger</b> project would have a budget in excess of{' '}
                <span className="text-success"> 80k </span>per platform.
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
