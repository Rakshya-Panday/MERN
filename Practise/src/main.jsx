import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route ,RouterProvider} from 'react-router-dom'
import GameDisplay from './Pages/GameDisplay.jsx'
import GameDetails from './Pages/GameDetails.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
      <Route path='/gamedisplay' element = {<GameDisplay/>}/>
      <Route path = '/gameedtails' element = {<GameDetails/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)