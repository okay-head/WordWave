import { initializeApp } from 'firebase/app'
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyD5ZE2GH7TEIGnZ5M_seuH7hPwYYcHnkBg',
  authDomain: 'wordwave-6ced7.firebaseapp.com',
  projectId: 'wordwave-6ced7',
  storageBucket: 'wordwave-6ced7.appspot.com',
  messagingSenderId: '547198730664',
  appId: '1:547198730664:web:730a7f0dd759e32b6a1d9d',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
