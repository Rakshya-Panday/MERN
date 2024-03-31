import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route ,RouterProvider} from 'react-router-dom'
import GameDisplay from './Pages/GameDisplay.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.jsx'
import AddUser from './Pages/AddUser.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
      <Route path='/gamedisplay' element = {<GameDisplay/>}/>
      <Route path='/add' element = {<AddUser/>}/>
    

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
 <RouterProvider router={router} />
 </Provider>
  </React.StrictMode>,
)
