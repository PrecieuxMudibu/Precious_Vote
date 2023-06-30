import { ThemeProvider } from '@mui/material';
import '../styles/globals.css'
import { useState, createContext } from 'react'
import theme from '../customization/materialui';

const applicationContext = createContext();

export default function App({ Component, pageProps }) {

  const [token, set_token]=useState('')
  const [connectedUser, setConnectedUser] = useState({})
  const [indice_stepper,   set_indice_stepper ] = useState(0);

  const [election_to_create, set_election_to_create] = useState({posts: [{name:'', candidates:[]}], tariff:"Free", two_rounds:false})
  return ( 
      <ThemeProvider theme={theme}>
          <applicationContext.Provider value={{connectedUser, setConnectedUser, election_to_create, set_election_to_create,token, set_token, indice_stepper, set_indice_stepper}}>
             <Component {...pageProps} />
          </applicationContext.Provider>
      </ThemeProvider>
          )
          
}

export { applicationContext };
