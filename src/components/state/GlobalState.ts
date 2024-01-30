import { create } from 'zustand'
type Tuser = {
  uid: string
  email: string
}
type T = {
  auth: boolean
  firebaseAuthObj: Tuser
  setAuth: (val: boolean) => void
  setfirebaseAuthObj: (val: Tuser) => void
}
const useGlobalStore = create<T>()((set) => ({
  auth: false, //is authenticated
  firebaseAuthObj: { uid: 'null', email: 'null' }, //firebase auth object
  setAuth: (val) => set(() => ({ auth: val })),
  setfirebaseAuthObj: (val) => set(() => ({ firebaseAuthObj: val })),
}))

export default useGlobalStore
