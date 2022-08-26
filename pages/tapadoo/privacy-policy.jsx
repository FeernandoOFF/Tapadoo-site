import React from 'react';
import { Layout } from '../../components/layout/Layout';

import sitedata from '../../site-data.json';
const tapadoo = sitedata.tapadoo;

function PrivacyPolicy() {
  return (
    <div className="app-container mb-[10vh]">
      <h1 className="app-title text-center my-[15vh]">Privacy Policy</h1>
      <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
        <div className="et_pb_text_inner">
          <p className="text-sm my-10">Updated: May 2018</p>
          <p className="my-3">
            The EU General Data Protection Regulation (“GDPR”) is a legal
            regulation that came into force across the European Union on 25th
            May 2018. The new regulation aims to standardise data protection
            laws and processing across the EU, providing individuals with
            greater control over how their personal data is used, processed or
            disposed of. GDPR applies to any business that has customers in the
            European Union or that deals with any kind of personal data of EU
            Citizens.
          </p>
          <p>
            Tapadoo are committed to ensuring data privacy and protecting
            personal data. We have always implemented strong security and data
            protection processes and technologies and complied with existing
            data protection regulations. We have minimised the amount of
            personal data we collect and store. We have never processed
            sensitive personal data.
          </p>
          <p>
            This privacy policy sets out how Tapadoo uses and protects any
            information that you give to us. We are committed to ensuring that
            your privacy is protected. Should we ask you to provide certain
            information by which you can be identified when using this website,
            then you can be assured that it will only be used in accordance with
            this privacy policy. Tapadoo may change this policy from time to
            time by updating this page. You should check this page on occasion
            to ensure that you are happy with any changes.
          </p>
          <p className="my-4 text-xl">
            <strong>Personal Data</strong>
          </p>
          <p>
            Throughout this website you may have an opportunity to send us
            information relating to you such as through the “get in touch” or
            “sign up” forms or any other area where you may send e-mails,
            download guides, enter contests or respond to any promotions. By
            choosing to participate in these, you will be providing us with some
            level of personal information relating to you. This information will
            only be used by Tapadoo for the purposes for which it was provided
            by you, for verification purposes and for statistical analysis.
          </p>
          <p>
            You may choose to restrict the collection or use of your personal
            information. Whenever you are asked to fill in a form on our site,
            look for the box that you can click to indicate that you do not want
            to sign up to receive regular updates.
          </p>{' '}
          <p className="nitro-offscreen">
            We may email you about services where explicit permission has
            previously been given. If, at any time, you do not wish to receive
            communications from us and wish to be removed from our mailing list,
            you can do so by following one of the options listed in the Opting
            Out Section below or by selecting the unsubscribe option from the
            email communication we sent you.
          </p>{' '}
          <p className="nitro-offscreen">
            We do not sell or share mailing lists with other companies.
          </p>{' '}
          <p className=" my-4 text-xl">
            <strong className="">Opting Out</strong>
          </p>{' '}
          <p className="">
            If you do not wish to have your contact information held by us,
            please request removal of your details from our contact lists by
            clicking on the opt out or unsubscribe options at the end of our
            email communications, by replying to the email we sent you asking to
            be removed or by contacting us via one of the following means:
          </p>{' '}
          <p className="">
            <a className="" href={`mailto:${tapadoo.contact.mail}`}>
              Email:
              <span
                aria-label="Tapadoo mail"
                className="text-primary"
                dangerouslySetInnerHTML={{
                  __html: tapadoo.contact.mail,
                }}
              />
            </a>
          </p>{' '}
          <p className="">
            Writing:{' '}
            <a className="" href={`${tapadoo.contact.locationURL}`}>
              <span
                aria-label="Tapadoo location"
                className="text-primary"
                dangerouslySetInnerHTML={{
                  __html: tapadoo.contact.location,
                }}
              />
            </a>
          </p>{' '}
          <p className=" my-4 text-xl">
            <strong>Security</strong>
          </p>
          <p className="">
            We take great care to ensure the security of this site. That data
            you provide us is protected using SSL Technology. SSL is the
            industry method of encrypting personal information so that it can be
            securely transferred over the internet.
          </p>{' '}
          <p className=" my-4 text-xl">
            <strong>Site Tracking</strong>
          </p>{' '}
          <p className="">
            We use Google Analytics tracking software to monitor customer
            traffic patterns and site usage to help us develop the design and
            layout of the websites. This information is aggregated and the
            software does not allow the collection of individual site visitor
            information. It is used to assess user behaviour and characteristics
            in order to measure interest in and use of the various areas of the
            site. The type of information gathered typically includes:
          </p>{' '}
          <ul className="">
            <li>The number of visitors to our website</li>
            <li>The number of pages viewed</li>
            <li>Which parts of the site are most popular</li>
            <li>The demographics and interests of our visitors</li>
          </ul>{' '}
          <p className=" my-4 text-xl">
            <strong>Cookies</strong>
          </p>{' '}
          <p className="">
            This site uses cookies to enable us to improve our service to you
            and to provide certain features that you may find useful.Cookies are
            small text files that are transferred to your computer’s hard drive
            through your web browser to enable us to recognise your browser and
            help us to track visitors to our site; thus enabling us to
            understand the services that will be most suitable to you. A cookie
            contains a unique id to allow us to identify your computer when you
            travel around our site.
          </p>{' '}
          <p className="">
            Most Web browsers automatically accept cookies, but, if you wish,
            you can set your browser to prevent it from accepting cookies. The
            “help” portion of the toolbar on most browsers will tell you how to
            prevent your browser from accepting new cookies, how to have the
            browser notify you when you receive a new cookie, or how to disable
            cookies altogether. The cookies we use do not detect any information
            stored on your computers.
          </p>{' '}
          <p className="">
            For more information about cookies and how to stop cookies being
            installed visit the following website:{' '}
            <a href="http://www.allaboutcookies.org/" className="text-primary">
              http://www.allaboutcookies.org (opens in a new window)
            </a>
          </p>{' '}
          <p className=" my-4 text-xl">
            <strong>Links to Third Party Websites</strong>
          </p>{' '}
          <p className="">
            This privacy policy only covers the Tapadoo website that we own and
            control. It does not cover links to other websites and accordingly
            any information collected by those parties that own and control
            those websites or their use of cookies.
          </p>{' '}
          <p className="">
            Individual organisations operate their own policies regarding the
            use and sale of personal information and the use of cookies.{' '}
          </p>{' '}
        </div>{' '}
      </div>
    </div>
  );
}

PrivacyPolicy.getLayout = (page) => (
  <Layout title="Privacy Policy| Tapadoo "> {page} </Layout>
);
export default PrivacyPolicy;
