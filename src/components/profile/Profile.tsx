import { useEffect, useState } from 'react'
import placeHolderData from '../feed/placeholderData'
import Card from '../shared/Card'
import Container from '../shared/Container'
import placeHolderDataUser from '../user/placeHolderData'
import UserCard from '../users/UserCard'
import useGlobalStore from '../state/GlobalState'
import { getFn } from '../../firebase/firebaseDb'
// import TabBtn from './TabBtn'

export default function Profile() {
  const [followers, setFollowers] = useState(placeHolderDataUser)
  const [following, setFollowing] = useState(placeHolderDataUser)
  const [posts, setPosts] = useState(placeHolderData)

  const userObjContext = useGlobalStore((state) => state.user)
  useEffect(() => {
    /* 1. POSTS */
    // make a get call to all tweets
    const tweets = userObjContext.user_tweets
    if (tweets[0] == '0') setPosts([])

    /* 2. FOLLOWERS */
    const followers = userObjContext.user_followers
    if (followers[0] == '0') setFollowers([])

    /* 3. FOLLOWING */
    const following = userObjContext.user_following
    console.log(following)

    if (following[0] == '0') setFollowing([])
    else {
      // Promise.all(following.map((x) => getFn(`users/${x}`)))
      Promise.all(following.map((x) => getFn(`users/${x}`)))
        .then((res) => setFollowing(res))
        .catch((err) => console.log(err))
    }
  }, [userObjContext])
  return (
    <Container classVars='max-w-2xl mt-10'>
      <article className='header-card card'>
        <div className='flex flex-col gap-12 rounded-xl p-4 sm:flex-row md:p-5'>
          <img
            className='group-1 pfp -mt-2 ms-4 h-20 w-20 self-start rounded-full'
            src='/assets/user.webp'
            alt='avatar'
          />
          <div className='group-2 flex flex-col gap-4'>
            <section className='card-header flex'>
              <div className='flex items-center gap-3'>
                <div>
                  <h3 className='w-full text-3xl font-semibold text-gray-800 dark:text-white'>
                    {userObjContext.user_name}
                  </h3>
                  <p className='-mt-[2px] text-sm font-medium text-accent-pink-500 dark:text-accent-pink-900'>
                    {userObjContext.user_handle}
                  </p>
                </div>
              </div>
            </section>

            <div className='mt-2 text-gray-500 dark:text-gray-400'>
              {userObjContext.user_bio}
            </div>

            <div className='chips mt-7 flex gap-4 text-sm text-gray-500 dark:text-gray-400'>
              <span className='border-r pr-5'>
                <b className='font-semibold'>
                  {userObjContext.user_tweets[0] == '0'
                    ? 0
                    : userObjContext.user_tweets?.length}
                </b>{' '}
                Post(s){' '}
              </span>
              <span className='border-r pr-5'>
                <b className='font-semibold'>
                  {userObjContext.user_followers[0] == '0'
                    ? 0
                    : userObjContext.user_followers?.length}
                </b>{' '}
                Follower(s){' '}
              </span>
              <span>
                <b className='font-semibold'>
                  {userObjContext.user_following[0] == '0'
                    ? 0
                    : userObjContext.user_following?.length}
                </b>{' '}
                Following{' '}
              </span>
            </div>
          </div>

          <button
            className='inline-flex items-center gap-x-1.5 self-start rounded-full border border-accent-pink-600 px-4 py-2.5 text-xs font-medium text-accent-pink-600 transition-all hover:bg-accent-pink-600
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
            Followers
          </button>
          <button
            type='button'
            className='tab-btn-style'
            id='bar-with-underline-item-3'
            data-hs-tab='#bar-with-underline-3'
            aria-controls='bar-with-underline-3'
            role='tab'
          >
            Following
          </button>
        </nav>

        <div className='tabPanelDivs mt-3'>
          <div
            id='bar-with-underline-1'
            role='tabpanel'
            aria-labelledby='bar-with-underline-item-1'
          >
            <div className='cards-container panel-1-content'>
              {posts.length == 0 ? (
                <div className=''>
                  <div className='mt-16 flex flex-col gap-4'>
                    <img
                      src='/assets/no-data.svg'
                      alt='No user tweets'
                      className='mx-auto w-[33%]'
                    />
                    <h2 className='text-center text-lg'>No Posts</h2>
                  </div>
                </div>
              ) : (
                posts.map((x, i) => {
                  return <Card key={i} {...x} />
                })
              )}
            </div>
          </div>
          <div
            id='bar-with-underline-2'
            className='hidden'
            role='tabpanel'
            aria-labelledby='bar-with-underline-item-2'
          >
            <div className='cards-container panel-2-content'>
              {followers.length == 0 ? (
                <div>
                  <div className='mt-16 flex flex-col gap-4'>
                    <img
                      src='/assets/no-followers.svg'
                      alt='No Followers'
                      className='mx-auto w-[40%]'
                    />
                    <h2 className='text-center text-lg'>No followers</h2>
                  </div>
                </div>
              ) : (
                followers.map((x, i) => {
                  return <UserCard key={i} {...x} />
                })
              )}
            </div>
          </div>
          <div
            id='bar-with-underline-3'
            className='hidden'
            role='tabpanel'
            aria-labelledby='bar-with-underline-item-3'
          >
            <div className='cards-container panel-2-content'>
              {following.length == 0 ? (
                <div>
                  <div className='mt-16 flex flex-col gap-4'>
                    <img
                      src='/assets/no-followers.svg'
                      alt='No Following'
                      className='mx-auto w-[40%]'
                    />
                    <h2 className='text-center text-lg'>No following</h2>
                  </div>
                </div>
              ) : (
                following.map((x, i) => {
                  return <UserCard key={i} {...x} />
                })
              )}
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
