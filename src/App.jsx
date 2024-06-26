import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import Task1 from './pages/Task1/Task1'
import Task2 from './pages/Task2/Task2'
import Task3 from './pages/Task3/Task3'
import Task4 from './pages/Task4/Task4'
import UserCard from './pages/UserCard/UserCard'
import Layout from './components/Layout/Layout'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<Task1 />}></Route>
            <Route path='/task1' element={<Task1 />}></Route>
            <Route path='/task2' element={<Task2 />}></Route>
            <Route path='/task3' element={<Task3 />}></Route>
            <Route path='/task4' element={<Task4 />}></Route>
            <Route path='/task4/:id' element={<UserCard />}></Route>
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
