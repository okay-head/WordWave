// get set update delete
import {
  ref,
  get,
  getDatabase,
  connectDatabaseEmulator,
} from 'firebase/database'
import { app } from './firebaseApp'

const db = getDatabase(app)
connectDatabaseEmulator(db, 'localhost', 9000)

export const getFn = async (url: string = '', check = false) => {
  const data = await get(ref(db, url))
  if (check) return data.exists()
  return data.exists() && data.val()
}
