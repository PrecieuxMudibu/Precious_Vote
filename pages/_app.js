import { ThemeProvider } from '@mui/material';
import '../styles/globals.css'
import { useState, createContext } from 'react'
import theme from '../customization/materialui';

const applicationContext = createContext();

export default function App({ Component, pageProps }) {

  const [token, set_token]=useState('')
  const [connectedUser, setConnectedUser] = useState({})
  const [election_to_create, set_election_to_create] = useState({candidates: [{post:'', people:[]}], tariff:"Free", two_rounds:false})
  return ( 
      <ThemeProvider theme={theme}>
          <applicationContext.Provider value={{connectedUser, setConnectedUser, election_to_create, set_election_to_create,token, set_token}}>
             <Component {...pageProps} />
          </applicationContext.Provider>
      </ThemeProvider>
          )
          
}

export { applicationContext };
