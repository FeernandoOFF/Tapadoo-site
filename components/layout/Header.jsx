import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const tapadooLargeLogo = require('../../public/img/logos/tapadoo-large-logo.png');

const links = [
  {
    label: 'Tapadoo',
    path: '/tapadoo/about',
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
    path: '/apps/requisites',
    children: [
      { label: 'Do I need an app?', path: '/apps/requisites' },
      { label: 'How much does an app cost?', path: '/apps/costs' },
      { label: 'Case Studies', path: '/apps/success-cases' },
      { label: 'Process', path: '/apps/process' },
    ],
  },
  { label: 'Blog', path: '/blog/1' },
];
function Header() {
  const router = useRouter();
  const line = useRef(null);
  const [windowSize, setWindowSize] = useState('');

  const [currentLink, setCurrentLink] = useState('');
  const [currentSubLink, setActiveSubLink] = useState('');

  useEffect(() => {
    window.addEventListener('resize', (x) => setWindowSize(x));

    return () => {
      window.removeEventListener('resize', (x) => setWindowSize(x));
    };
  }, []);

  useEffect(() => {
    if (!router.asPath) return;
    const currentItem = links.find(({ path, children }) => {
      if (path === router.asPath) return true;
      if (children) {
        return !!children.find(({ path }) => path === router.asPath);
      }
    });
    setCurrentLink(currentItem);
  }, [router]);

  useEffect(() => {
    if (!currentLink || !currentLink.children) return;
    const activeSubLink = currentLink.children.find(
      ({ path }) => path === router.asPath
    );
    setActiveSubLink(activeSubLink);
  }, [currentLink, router]);

  const onRefChange = useCallback(
    (node) => {
      if (!node) return;

      const { x, width } = node.getBoundingClientRect();
      line.current.style.width = `${x + width / 2 + 2}px`;
    },
    [windowSize]
  );

  return (
    <>
      <div className="bg-base-100 shadow-sm z-50">
        <header className="navbar max-w-7xl mx-auto  ">
          <div className="navbar-start">
            <Link href="/">
              <a>
                <img
                  src={tapadooLargeLogo.default.src}
                  alt="Tapadoo logo"
                  className="w-full  max-w-[120px] cursor-pointer"
                />
              </a>
            </Link>
          </div>
          <div className="navbar-end md:hidden flex">
            <div className="dropdown dropdown-left">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <button>
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
                </button>
              </label>
              <LinkList
                expanded
                currentLink={currentLink}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
              />
            </div>
          </div>
          <div className="navbar-end hidden md:flex">
            <LinkList
              currentLink={currentLink}
              className={'menu menu-horizontal p-0'}
            />
          </div>
        </header>
      </div>
      {/* Links band */}
      {currentLink && currentLink.children && currentSubLink && (
        <div className="text-center text-sm mt-1 p-4 flex justify-center md:justify-evenly max-w-[1000px]  mx-auto overflow-x-hidden">
          <div
            ref={line}
            className="absolute h-[1px]   bg-gradient-to-l from-primary to-transparent top-[136px] left-0 w-[50vw] md:w-screen"
          ></div>
          {currentLink.children.map(({ path, label }) => (
            <Link key={path} href={path}>
              <button
                ref={currentSubLink.path === path && onRefChange}
                className={`py-2 px-4 p-3 rounded-[100px] z-50  relative   ${
                  currentSubLink.path === path
                    ? 'border-primary  text-primary border after:h-4 after:w-[1px] after:bg-primary after:absolute after:-bottom-4 after:left-[51%]'
                    : 'btn-ghost border-gray-400 border'
                } 
                ${currentSubLink.path === path ? 'block' : 'hidden md:block'}
                `}
              >
                <p>{label}</p>
              </button>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
function LinkList({ className, expanded = false, currentLink }) {
  const router = useRouter();
  return (
    <ul className={className}>
      {links.map(({ label, path, children }) => (
        <li key={path}>
          <Link href={path}>
            <a
              className={`${expanded ? 'font-semibold' : ''} ${
                currentLink?.path === path ? 'text-primary' : ''
              } `}
            >
              {label}
            </a>
          </Link>
          {expanded &&
            children &&
            children.map(({ label, path }) => (
              <Link key={path} href={path}>
                <a
                  className={` border my-2  ${
                    path === router.asPath
                      ? 'rounded-xl border-primary border font-semibold text-primary'
                      : 'border-transparent'
                  }`}
                >
                  {label}
                </a>
              </Link>
            ))}
        </li>
      ))}
    </ul>
  );
}

export default Header;
