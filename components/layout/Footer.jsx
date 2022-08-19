import Link from 'next/link';
import React from 'react';
const tapadooLargeLogo = require('../../public/img/logos/tapadoo-large-logo.png');

export default function Footer() {
  return (
    <footer className="p-10 bg-[#F5F5F590] text-[#A09893]  ">
      <div className="app-container footer">
        <div>
          <img
            src={tapadooLargeLogo.default.src}
            alt="Tapadoo logo"
            className="w-full  max-w-[120px] cursor-pointer grayscale"
          />
          <div className="my-4">
            <p>26-28 Strand Street Great, Dublin 1 </p>
            <a href="mailto:enquiries@tapadoo.com">enquiries@tapadoo.com</a>
          </div>
          <a href="tel:3531123456">+353 1 123456</a>
        </div>
        <div>
          <span className="footer-title">Links</span>
          <Link href="/tapadoo/contact">
            <a className="link link-hover">Privacy Policy</a>
          </Link>
          <Link href="/tapadoo/contact">
            <a className="link link-hover">Support</a>
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
