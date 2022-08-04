import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const links = [
  {
    label: 'Tapadoo',
    path: '/tapadoo',
    children: [
      { label: 'Who are you?', path: '/tapadoo/about' },
      { label: 'Where are you based?', path: '/tapadoo/localization' },
      { label: 'Who do you work with?', path: '/tapadoo/work' },
      { label: 'Are you hiring?', path: '/tapadoo/careers' },
      { label: 'Get in touch', path: '/tapadoo/contact' },
    ],
  },
  {
    label: 'Apps',
    path: '/apps',
    children: [
      { label: 'Do I need an app?', path: '/apps/requisites' },
      { label: 'How much does an app cost?', path: '/apps/costs' },
      { label: 'Case Studies', path: '/apps/success-cases' },
      { label: 'Process', path: '/apps/process' },
    ],
  },
  { label: 'Blog', path: '/blog' },
];
function Header() {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState('');
  return (
    <>
      <header className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <Link href="/">
            <img
              src="/img/logos/tapadoo-large-logo.png"
              alt="Tapadoo logo"
              className="w-full  max-w-[100px]"
            />
          </Link>
        </div>
        <div className="navbar-end md:hidden flex">
          <div className="dropdown dropdown-left">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                  fill="currentColor"
                />
                <path
                  d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
                  fill="currentColor"
                />
                <path
                  d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
                  fill="currentColor"
                />
              </svg>
            </label>
            <LinkList
              expanded
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            />
          </div>
        </div>
        <div className="navbar-end hidden md:flex">
          <LinkList className={'menu menu-horizontal p-0'} />
        </div>
      </header>
      <div className="text-center bg-primary mt-1">
        <p> {router.asPath} </p>
      </div>
    </>
  );
}
function LinkList({ className, expanded = false }) {
  return (
    <ul className={className}>
      {links.map(({ label, path, children }) => (
        <li key={path}>
          <Link href={path}>
            <a className={expanded ? 'font-semibold' : ''}> {label}</a>
          </Link>
          {expanded &&
            children &&
            children.map(({ label, path }) => (
              <Link key={path} href={path}>
                {label}
              </Link>
            ))}
        </li>
      ))}
    </ul>
  );
}

export default Header;
