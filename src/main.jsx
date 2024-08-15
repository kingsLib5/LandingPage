import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header'
import Registerbody from './Registerbody'
import Staticsbody from './Staticsbody'
import Reasonbody from './Reasonbody'
import Instructorbody from './Instructorbody'
import Endresigterbody from './Endresigterbody'
import Footer from './Footer'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* <Tailwind/> */}

<Header/>
<Registerbody/>
<Staticsbody/>
<Reasonbody/>
<Instructorbody/>
<Endresigterbody/>
<Footer/>
  </StrictMode>,
)
