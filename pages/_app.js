import '../styles/globals.css'
import { useState, createContext } from 'react'

const applicationContext = createContext();

export default function App({ Component, pageProps }) {

  const [connectedUser, setConnectedUser] = useState({})
  const [election_to_create, set_election_to_create] = useState({candidates: [{post:'', people:[]}]})
  return ( <applicationContext.Provider value={{connectedUser, setConnectedUser, election_to_create, set_election_to_create}}>
             <Component {...pageProps} />
          </applicationContext.Provider>
          )
          
}

export { applicationContext };
