import '../styles/globals.css'
import { useState, createContext } from 'react'

const applicationContext = createContext();

export default function App({ Component, pageProps }) {

  const [connectedUser, setConnectedUser] = useState({id: "hello"})
  return ( <applicationContext.Provider value={{connectedUser, setConnectedUser}}>
             <Component {...pageProps} />
          </applicationContext.Provider>
          )
}

export { applicationContext };
