import Container from '../shared/Container'
// import TabBtn from './TabBtn'

export default function Profile() {
  return (
    <Container classVars='max-w-2xl'>
      <article className='header-card card mt-8'>
        {/* <div className='flex flex-col sm:flex-row gap-10 rounded-xl border bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7] md:p-5'> */}
        <div className='flex flex-col gap-14 rounded-xl p-4 sm:flex-row md:p-5'>
          <span className='group-1 pfp -mt-4 block h-20 w-20 rounded-full bg-gray-200'></span>
          <div className='group-2 flex flex-col gap-4'>
            <section className='card-header flex'>
              <div className='flex items-center gap-3'>
                <div>
                  <h3 className='w-full text-3xl font-semibold text-gray-800 dark:text-white'>
                    Author name
                  </h3>
                  <p className='-mt-[2px] text-sm font-medium text-accent-pink-500 dark:text-accent-pink-900'>
                    @username
                  </p>
                </div>
              </div>
            </section>

            <div className='mt-2 text-gray-500 dark:text-gray-400'>
              <p> Crypto. Investing. Market manipulation.</p>
              <p> All opinions are mine</p>
            </div>

            <div className='chips mt-7 flex gap-4 text-sm text-gray-500 dark:text-gray-400'>
              <span className='border-r pr-5'>
                <b className='font-semibold'>10</b> Posts{' '}
              </span>
              <span className='border-r pr-5'>
                <b className='font-semibold'>450</b> Followers{' '}
              </span>
              <span>
                <b className='font-semibold'>750</b> Following{' '}
              </span>
            </div>
          </div>

          <button
            className='inline-flex items-center gap-x-1.5 self-start rounded-full border border-accent-pink-600 px-4 py-3 text-xs font-medium text-accent-pink-600 transition-all hover:bg-accent-pink-600
            hover:text-white
            dark:border-gray-500 dark:text-gray-400 dark:hover:border-accent-pink-900 dark:hover:bg-transparent dark:hover:text-accent-pink-900 sm:ms-auto'
          >
            Edit Profile
          </button>
        </div>
      </article>

      <section className='user-info-tabs mx-auto mt-7 max-w-lg'>
        <nav
          className='relative z-0 flex overflow-hidden rounded-xl dark:border-gray-700'
          aria-label='Tabs'
          role='tablist'
        >
          {/*
          //attempt to refactor
           <TabBtn
            id='bar-with-underline-item-1'
            data-hs-tab='#bar-with-underline-1'
            aria-controls='bar-with-underline-1'
            classVars='current'
          >
            POSTS
          </TabBtn>
          <TabBtn
            id='bar-with-underline-item-2'
            data-hs-tab='#bar-with-underline-2'
            aria-controls='bar-with-underline-2'
          >
            Followers
          </TabBtn>
          <TabBtn
            id='bar-with-underline-item-3'
            data-hs-tab='#bar-with-underline-3'
            aria-controls='bar-with-underline-3'
          >
            Following
          </TabBtn> 
          */}

          <button
            type='button'
            className='active tab-btn-style'
            id='bar-with-underline-item-1'
            data-hs-tab='#bar-with-underline-1'
            aria-controls='bar-with-underline-1'
            role='tab'
          >
            Posts
          </button>
          <button
            type='button'
            className='tab-btn-style'
            id='bar-with-underline-item-2'
            data-hs-tab='#bar-with-underline-2'
            aria-controls='bar-with-underline-2'
            role='tab'
          >
            Tab 2
          </button>
          <button
            type='button'
            className='tab-btn-style'
            id='bar-with-underline-item-3'
            data-hs-tab='#bar-with-underline-3'
            aria-controls='bar-with-underline-3'
            role='tab'
          >
            Tab 3
          </button>
        </nav>

        <div className='tabPanelDivs mt-3'>
          <div
            id='bar-with-underline-1'
            role='tabpanel'
            aria-labelledby='bar-with-underline-item-1'
          >
            POST
          </div>
          <div
            id='bar-with-underline-2'
            className='hidden'
            role='tabpanel'
            aria-labelledby='bar-with-underline-item-2'
          >
            FOLLOWERS
          </div>
          <div
            id='bar-with-underline-3'
            className='hidden'
            role='tabpanel'
            aria-labelledby='bar-with-underline-item-3'
          >
            FOLLOWING
          </div>
        </div>
      </section>
    </Container>
  )
}
