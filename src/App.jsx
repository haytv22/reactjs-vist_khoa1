import './styles/app.css'
import Header from './component/layout/header'
import Footed from './component/layout/footed'
import { Outlet } from 'react-router-dom'

function App() {
  return <>
    <Header />
    <Outlet />
    <Footed />
  </>
}

export default App
