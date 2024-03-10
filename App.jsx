import RootLayout from './components/RootLayout'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home></Home>}></Route>
      <Route path="/Shop" element={<Shop></Shop>}></Route>
    </Route>
  )
)
function App() {
  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}

export default App
