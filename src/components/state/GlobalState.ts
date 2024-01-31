import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
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
const useGlobalStore = create<T>()(
  persist(
    (set) => ({
      auth: false, //is authenticated
      firebaseAuthObj: { uid: 'null', email: 'null' }, //firebase auth object
      setAuth: (val) => set(() => ({ auth: val })),
      setfirebaseAuthObj: (val) => set(() => ({ firebaseAuthObj: val })),
    }),
    {
      name: 'global-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export default useGlobalStore
