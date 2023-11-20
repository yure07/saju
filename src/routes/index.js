import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import RecoverPassword from "../pages/RecuperarSenha";
//import Home from "../pages/Home";
import Plantao from "../pages/Plantão";
import Ts from "../pages/Plantão/T's";
import Membros from "../pages/Membros";
import RegisterMember from "../pages/Membros/Register";
import SeeMoreMember from "../pages/Membros/SeeMore";
import EditMember from "../pages/Membros/Edit";

const RoutesApp = () => {
    return(
    <Routes>
        <Route path="/" element={<Login/>}/>        
        <Route path="/recuperar-senha" element={<RecoverPassword/>}/>
        <Route path="/plantao" element={<Plantao/>}/>
            <Route path="/plantao/:params" element={<Ts/>}/>
        <Route path="/membros" element={<Membros/>}/>
            <Route path="/membros/novo" element={<RegisterMember/>}/>
            <Route path="/membros/ver-mais" element={<SeeMoreMember/>}/>
            <Route path="/membros/editar" element={<EditMember/>}/>
    </Routes>
    )
}
export default RoutesApp