import { NavLink } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
  const Anchor = (
    id: string,
    to: string,
    children: React.ReactNode,
    classVars: string = '',
  ) => (
    <NavLink
      id={id}
      className={`rounded-sm py-1 font-semibold tracking-wide transition-all hover:text-accent-pink-600 dark:text-gray-400 dark:hover:text-gray-500 sm:my-5 sm:px-1 ${classVars}`}
      to={to}
    >
      {children}
    </NavLink>
  )

  return (
    <div className='navbar-container'>
      <header className='z-50 flex w-full flex-wrap border-b border-gray-200 bg-white py-3 text-sm shadow-md dark:border-gray-700 dark:bg-gray-800 sm:flex-nowrap sm:justify-start sm:py-0'>
        <nav
          className='relative mx-auto w-full max-w-7xl px-4 sm:flex sm:items-center sm:justify-between sm:px-6 md:px-8'
          aria-label='Global'
        >
          <div className='flex items-center justify-between'>
            <a
              className='w-[160px] flex-none rounded-md bg-white text-xl font-semibold dark:text-white'
              href='#'
              aria-label='Brand'
            >
              <Logo />
            </a>
            <div className='sm:hidden'>
              <button
                type='button'
                className='hs-collapse-toggle flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                data-hs-collapse='#navbar-collapse-with-animation'
                aria-controls='navbar-collapse-with-animation'
                aria-label='Toggle navigation'
              >
                <svg
                  className='h-4 w-4 hs-collapse-open:hidden'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                  />
                </svg>
                <svg
                  className='hidden h-4 w-4 flex-shrink-0 hs-collapse-open:block'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                </svg>
              </button>
            </div>
          </div>
          <div
            id='navbar-collapse-with-animation'
            className='hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block'
          >
            <div className='mt-5 flex flex-col gap-x-0 gap-y-4 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-x-6 sm:gap-y-0 sm:ps-7'>
              {Anchor(
                'feed',
                '/',
                <div className='flex items-center'>
                  <svg
                    className='me-[5px]'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    width='16px'
                    height='16px'
                    viewBox='0,0,256,256'
                  >
                    <g
                      fill='currentColor'
                      fillRule='nonzero'
                      stroke='none'
                      strokeWidth='1'
                      strokeLinecap='butt'
                      strokeLinejoin='miter'
                      strokeMiterlimit='10'
                      strokeDasharray=''
                      strokeDashoffset='0'
                      fontFamily='none'
                      fontWeight='none'
                      fontSize='none'
                      textAnchor='none'
                      style={{ mixBlendMode: 'normal' }}
                    >
                      <g transform='scale(5.12,5.12)'>
                        <path d='M5,4c-1.64453,0 -3,1.35547 -3,3v36c0,1.64453 1.35547,3 3,3h40c1.64453,0 3,-1.35547 3,-3v-36c0,-1.64453 -1.35547,-3 -3,-3zM5,6h40c0.55469,0 1,0.44531 1,1v36c0,0.55469 -0.44531,1 -1,1h-40c-0.55469,0 -1,-0.44531 -1,-1v-36c0,-0.55469 0.44531,-1 1,-1zM10.8125,14c-0.55078,0.05078 -0.95703,0.54297 -0.90625,1.09375c0.05078,0.55078 0.54297,0.95703 1.09375,0.90625h28c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-28c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM10.8125,24c-0.55078,0.05078 -0.95703,0.54297 -0.90625,1.09375c0.05078,0.55078 0.54297,0.95703 1.09375,0.90625h28c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-28c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM10.8125,34c-0.55078,0.05078 -0.95703,0.54297 -0.90625,1.09375c0.05078,0.55078 0.54297,0.95703 1.09375,0.90625h28c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-28c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0z'></path>
                      </g>
                    </g>
                  </svg>
                  Feed
                </div>,
              )}
              {Anchor(
                'users',
                '/users',
                <div className='flex items-center'>
                  <svg
                    className='me-1'
                    version='1.0'
                    xmlns='http://www.w3.org/2000/svg'
                    width='28px'
                    height='28px'
                    viewBox='0 0 256.000000 256.000000'
                    preserveAspectRatio='xMidYMid meet'
                  >
                    <g
                      transform='translate(0.000000,256.000000) scale(0.100000,-0.100000)'
                      fill='currentColor'
                      stroke='none'
                    >
                      <path
                        d='M1183 1926 c-120 -39 -216 -151 -233 -271 -7 -52 -14 -47 -24 16 -4
20 -20 55 -36 78 -112 155 -317 155 -429 0 -64 -88 -62 -207 4 -293 l33 -43
-43 -21 c-65 -31 -111 -77 -142 -140 -25 -51 -28 -70 -32 -174 l-3 -117 39
-20 c50 -25 153 -60 210 -70 36 -7 48 -5 66 10 35 29 12 51 -79 75 -43 12 -96
28 -118 38 l-38 16 4 89 c5 115 36 171 117 213 51 27 59 28 195 28 147 0 201
-13 235 -53 12 -15 8 -22 -29 -59 -24 -24 -57 -72 -74 -108 -30 -62 -31 -71
-34 -218 l-4 -152 64 -29 c284 -128 586 -133 868 -12 l85 36 0 155 c0 153 0
156 -31 220 -17 36 -50 84 -74 108 -37 37 -41 44 -29 59 34 40 88 53 235 53
130 0 144 -2 191 -25 86 -43 123 -115 123 -238 l0 -68 -37 -16 c-21 -9 -74
-25 -117 -37 -91 -24 -114 -46 -79 -75 18 -15 30 -17 66 -10 57 10 160 45 210
70 l39 20 -3 117 c-4 104 -7 123 -32 174 -31 63 -77 109 -142 140 l-43 21 33
43 c172 225 -125 529 -354 363 -53 -38 -99 -102 -107 -148 -11 -61 -21 -66
-27 -13 -12 99 -88 201 -184 248 -66 33 -175 42 -240 20z m221 -100 c117 -68
160 -211 101 -332 -57 -117 -184 -170 -306 -129 -147 50 -216 225 -141 358 54
96 134 140 239 133 44 -2 75 -11 107 -30z m-633 -71 c110 -72 111 -226 1 -300
-50 -34 -144 -35 -193 -2 -97 65 -113 189 -36 273 61 66 154 78 228 29z m1164
24 c22 -6 56 -28 76 -48 84 -83 70 -211 -30 -278 -49 -33 -143 -32 -193 2
-125 85 -103 270 39 321 47 16 58 17 108 3z m-955 -320 c12 -22 37 -58 56 -79
l36 -40 -27 -10 c-38 -14 -40 -14 -88 23 -24 18 -57 39 -74 46 l-31 13 33 44
c19 25 37 61 40 82 11 65 18 68 27 14 4 -29 17 -71 28 -93z m654 79 c4 -21 22
-57 41 -82 l33 -44 -31 -13 c-17 -7 -50 -28 -74 -46 -48 -37 -50 -37 -88 -23
l-27 10 36 40 c48 53 76 111 83 172 6 53 16 48 27 -14z m-113 -294 c64 -30
125 -88 157 -148 25 -47 27 -60 27 -176 l0 -125 -87 -32 c-220 -82 -456 -82
-676 0 l-87 32 0 125 c0 141 13 179 84 253 78 83 132 97 356 94 160 -2 185 -4
226 -23z'
                      />
                    </g>
                  </svg>
                  Users
                </div>,
              )}
              {Anchor(
                'profile',
                '/profile',
                <div className='flex items-center'>
                  <svg
                    className='me-1 h-4 w-4 flex-shrink-0'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
                  </svg>
                  Profile
                </div>,
              )}

              {/* --- disabled dropdown menu ---- */}
              {/* <div className='hs-dropdown [--adaptive:none] [--strategy:static] sm:py-4 sm:[--strategy:fixed] sm:[--trigger:hover]'>
                <button type='button' className='flex w-full items-center'>
                  <svg
                    className='me-2 mt-[2px] h-4 w-4 flex-shrink-0'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
                  </svg>
                  Profile
                  <svg
                    className='ms-2 h-2.5 w-2.5 text-gray-600'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                    ></path>
                  </svg>
                </button>

                 <div className='hs-dropdown-menu top-full z-10 hidden rounded-lg bg-white p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-5 before:start-0 before:h-5 before:w-full hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 sm:w-48 sm:border sm:shadow-md sm:duration-[150ms] sm:dark:border'>
                  <a
                    className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    href='#'
                  >
                    About
                  </a>
                  <div className='hs-dropdown relative [--adaptive:none] [--strategy:static] sm:[--trigger:hover] sm:[--strategy:absolute]'>
                    <button
                      type='button'
                      className='flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    >
                      Sub Menu
                      <svg
                        className='ms-2 h-2.5 w-2.5 text-gray-600 sm:-rotate-90'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                        ></path>
                      </svg>
                    </button>

                    <div className='hs-dropdown-menu end-full top-0 z-10 !mx-[10px] hidden rounded-lg bg-white p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-end-5 before:top-0 before:h-full before:w-5 hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 sm:mt-2 sm:w-48 sm:border sm:shadow-md sm:duration-[150ms] sm:dark:border'>
                      <a
                        className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                        href='#'
                      >
                        About
                      </a>
                      <a
                        className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                        href='#'
                      >
                        Downloads
                      </a>
                      <a
                        className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                        href='#'
                      >
                        Team Account
                      </a>
                    </div>
                  </div>

                  <a
                    className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    href='#'
                  >
                    Downloads
                  </a>
                  <a
                    className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    href='#'
                  >
                    Team Account
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
