type Tuser = {
  user_id: string
  user_email: string
  user_name: string
  user_handle: string
  user_bio: string
  user_tweets: string[]
  user_followers: string[]
  user_following: string[]
}

type Ttweet = {
  id: string
  author_id: string
  author_name: string
  author_handle: string
  date: number
  body: string
}
