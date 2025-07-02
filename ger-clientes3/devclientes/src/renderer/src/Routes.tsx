import {Router, Route} from 'electron-router-dom'

import {Home} from "../pages/home"
import {Detail} from "../pages/detail"
import {About} from "../pages/about"
import {Create} from "../pages/create"
import { Layout } from '../components/layout'

export function Routes(){
    //Uso do Layout dessa forma permite que a formatação dele envolva todas as rotas
    return(
        <Router
            main={
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/detail' element={<Detail/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/create' element={<Create/>}/>
                </Route>
            }
        />
    )
}