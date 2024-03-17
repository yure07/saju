import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import RecoverPassword from "../pages/RecuperarSenha";
//import Home from "../pages/Home";
import Plantao from "../pages/Plantao";
import Ts from "../pages/Plantao/T's";
import Membros from "../pages/Membros";
import RegistrarMembro from "../pages/Membros/Registrar";
import VerMaisMembro from "../pages/Membros/VerMais";
import EditarMembro from "../pages/Membros/Editar";

const RoutesApp = () => {
    return(
    <Routes>
        <Route path="/" element={<Login/>}/>        
        <Route path="/recuperar-senha" element={<RecoverPassword/>}/>
        <Route path="/plantao" element={<Plantao/>}/>
            <Route path="/plantao/:params" element={<Ts/>}/>
        <Route path="/membros" element={<Membros/>}/>
            <Route path="/membros/novo" element={<RegistrarMembro/>}/>
            <Route path="/membros/ver-mais" element={<VerMaisMembro/>}/>
            <Route path="/membros/editar" element={<EditarMembro/>}/>
    </Routes>
    )
}
export default RoutesApp