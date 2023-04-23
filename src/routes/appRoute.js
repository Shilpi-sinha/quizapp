import { Routes, Route} from 'react-router-dom'
import End from "../pages/end/end"
import Game from "../pages/game/game"
import Home from "../pages/home/home"
import ScorePage from '../pages/score/ScorePage'

const AppRoute=()=>{
    return (
        <>
<Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/game" element={<Game/>} />
        <Route path="/end" element={<End/>} />
        <Route path="/scorePage" element={<ScorePage/>} />
</Routes>
</>
    )
}
export default AppRoute