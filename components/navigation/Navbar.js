/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  const clickEl = useRef(null);
  const router = useRouter();
  const activeClassList = 'px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white';
  const defaultClassList = 'px-3 py-2 rounded-md text-sm font-medium text-white';
  const mobileClassList = 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium';
  const mobileDefaultClassList = 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium';

  const navItemClassList = (item) => (
    router.pathname === item ? activeClassList : defaultClassList
  );

  const mobileNavItemClassList = (item) => (
    router.pathname === item ? mobileClassList : mobileDefaultClassList
  );

  const handleClick = () => {
    if (clickEl.current.classList.contains('hidden')) {
      clickEl.current.classList.remove('hidden');
      clickEl.current.classList.add('block');
    } else {
      clickEl.current.classList.remove('block');
      clickEl.current.classList.add('hidden');
    }
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              type="button"
            >
              <span className="sr-only">
                Open main menu
              </span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                onClick={handleClick}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/">
                  <a className={navItemClassList('/')}>
                    Home
                  </a>
                </Link>
                {/* <Link href="/about">
                  <a className={navItemClassList('/about')}>
                    About
                  </a>
                </Link> */}
                <Link href="/projects">
                  <a className={navItemClassList('/projects')}>
                    Projects
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden" ref={clickEl}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/">
            <a className={mobileNavItemClassList('/')}>
              Home
            </a>
          </Link>
          {/* <Link href="/about">
            <a className={mobileNavItemClassList('/about')}>
              About
            </a>
          </Link> */}
          <Link href="/projects">
            <a className={mobileNavItemClassList('/projects')}>
              Projects
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
