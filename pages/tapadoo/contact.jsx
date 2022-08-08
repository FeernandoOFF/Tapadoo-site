import React from 'react';
import { Layout } from '../../components/layout/Layout';

function Contact() {
  return (
    <div className="">
      <div className="hero min-h-screen app-container ">
        <div className="hero-content flex-col md:flex-row justify-between w-full min-h-[60vh] items-start">
          <div className="text-center lg:text-left max-w-[600px]">
            <h1 className="text-5xl font-bold">Get in Touch</h1>
            <p className="py-6 opacity-70 font-light">
              Interested in a demo?
              <br />
              Have a question or a comment?
              <br />
              Simply fill out the form and we’ll be in touch
            </p>
            <p>Phone: 4444</p>
            <p>Phone: enquiries@tapadoo.com</p>
            <p>Phone: 26-28 Strand Street Great, Dublin 1</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-full">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea className="textarea textarea-bordered bg-gray-100 min-h-[150px]"></textarea>
              </div>
              <div className="form-control mt-6 md:max-w-[100px] md:self-end">
                <button className="px-6 py-2 rounded-2xl bg-primary text-base text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Contact.getLayout = (page) => (
  <Layout title="Contact | Tapadoo"> {page} </Layout>
);
export default Contact;
