import Link from 'next/link';
import React from 'react';
const tapadooLargeLogo = require('../../public/img/logos/tapadoo-large-logo.png');
import siteData from '../../site-data.json';
const tapadoo = siteData.tapadoo;

export default function Footer() {
  return (
    <footer className="p-10 bg-[#eeeeee90] text-[#A09893]  ">
      <div className="app-container footer">
        <div>
          <img
            src={tapadooLargeLogo.default.src}
            alt="Tapadoo logo"
            className="w-full  max-w-[120px] cursor-pointer grayscale"
          />
          <div className="my-4">
            <a href={`${tapadoo.contact.locationURL}`}>
              <p
                aria-label="Tapadoo location"
                className="my-2"
                dangerouslySetInnerHTML={{
                  __html: tapadoo.contact.location,
                }}
              />
            </a>
            <a href={`mailto:${tapadoo.contact.mail}`}>
              <p
                aria-label="Tapadoo mail"
                className=""
                dangerouslySetInnerHTML={{
                  __html: tapadoo.contact.mail,
                }}
              />
            </a>
          </div>
          <a href={`tel:${tapadoo.contact.phone}`}>
            <p
              aria-label="Tapadoo Phone"
              className=""
              dangerouslySetInnerHTML={{
                __html: tapadoo.contact.phone,
              }}
            />
          </a>
        </div>
        <div>
          <span className="footer-title">Links</span>
          <Link href="/tapadoo/privacy-policy">
            <a className="link link-hover">Privacy Policy</a>
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link href="/tapadoo/about">
            <a className="link link-hover">About us</a>
          </Link>
          <Link href="/tapadoo/careers">
            <a className="link link-hover">Careers</a>
          </Link>
          <Link href="/apps/costs">
            <a className="link link-hover">Pricing</a>
          </Link>
          <Link href="/blog/1">
            <a className="link link-hover">Blog</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
