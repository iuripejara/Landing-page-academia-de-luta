import Carrosel from "../items/carrosel/Carrosel";
import Modalidade from "../items/modalidade/Modalidade";
import NavTopo from "../items/navTopo/NavTopo";

export default function IndexTopo() {
    return(
        <>
            <div className="bg-img-topo bg-cover relative w-full bg-center h-72">
                
            </div>
            <NavTopo/>
            <Carrosel/>
            <Modalidade/>
        </>
        
    )
}