import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import placeHolderDataUser from '../user/placeHolderData'

type T = {
  auth: boolean
  user: TTuser
  setAuth: (val: boolean) => void
  setUser: (val: TTuser) => void
}
const userDefaultVal = { uid: 'null', email: 'null', ...placeHolderDataUser[0] }

// Actual store creation in zustand
const useGlobalStore = create<T>()(
  persist(
    (set) => ({
      auth: false, //is authenticated
      user: userDefaultVal, //sets the current user object
      setAuth: (val) => set(() => ({ auth: val })),
      setUser: (val) => set(() => ({ user: val })),
    }),
    {
      name: 'global-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export default useGlobalStore
