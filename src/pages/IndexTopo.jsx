import Carrosel from "../items/carrosel/Carrosel";
import Comentarios from "../items/comentarios/Comentarios";
import Modalidade from "../items/modalidade/Modalidade";
import NavTopo from "../items/navTopo/NavTopo";
import Rodape from "../items/rodape/Rodape";

export default function IndexTopo() {
    return(
        <>
            <div className="bg-img-topo bg-cover relative w-full bg-center h-72">
                
            </div>
            <NavTopo/>
            <Carrosel/>
            <Modalidade/>
            <Comentarios/>
            <Rodape/>
        </>
        
    )
}