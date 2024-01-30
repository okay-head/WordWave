import { format } from 'fecha'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

/* 
  A word on loading states

  Don't make dedicated skeleton screens
  Instead, make components with built-in skeleton states.
  
  This approach is beneficial because:
- It keeps styles in sync.
- Components should represent all possible states — loading included.
- It allows for more flexible loading patterns. example: it's possible to have the title load before the body
 */

export default function Card({
  id,
  author_name,
  author_handle,
  date,
  body,
}: Ttweet) {
  const formatDate = (date: Date) => format(date, 'Do MMMM, YYYY')

  const bodyData =
    'Sadly excepting Iure defungo copiose amita armarium aureus debitis titulus. Ultio cras thesaurus suspendo contabesco. Esse carpo velut vos cervus vesica sol denego abscido.'
  return (
    <article className='card mt-8' id={id}>
      <div className='flex flex-col rounded-xl border bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7] md:p-5'>
        <section className='card-header flex'>
          <div className='flex items-center gap-3'>
            <img
              className='ms-1 mt-[2px] inline-block h-9 w-9 self-start rounded-full'
              src='/assets/user.webp'
              alt='avatar'
            />
            <div>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
                {author_name === 'null' ? (
                  <Skeleton
                    baseColor='#d8d9d9'
                    highlightColor='#e5e6e6'
                    height={'1.125rem'}
                    width={'8rem'}
                  />
                ) : (
                  author_name
                )}
              </h3>
              <p className='-mt-[2px] text-xs font-medium text-accent-pink-500 dark:text-accent-pink-900'>
                {author_handle === 'null' ? (
                  <Skeleton
                    baseColor='#d8d9d9'
                    highlightColor='#e5e6e6'
                    height={'0.75rem'}
                    width={'5rem'}
                  />
                ) : (
                  `@${author_handle}`
                )}
              </p>
            </div>
          </div>
          <span className='ms-auto text-xs text-gray-500 dark:text-gray-400'>
            {date === 0 ? (
              <Skeleton
                baseColor='#d8d9d9'
                highlightColor='#e5e6e6'
                height={'1rem'}
                width={'6.5rem'}
              />
            ) : (
              formatDate(new Date(date))
            )}
          </span>
        </section>

        <p className='mt-2 text-gray-500 dark:text-gray-400'>
          {body === 'null' ? (
            <Skeleton
              baseColor='#d8d9d9'
              highlightColor='#e5e6e6'
              height={'1rem'}
              width={'100%'}
              count={3}
            />
          ) : (
            bodyData
          )}
        </p>
      </div>
    </article>
  )
}
