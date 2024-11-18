export default function NavTopo() {
    return(
        <div 
            className="bg-Azul  w-[80%] h-36 flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-xl xl:top-1/3">
            <div
                className="bg-Cin h-28 w-[95%] rounded-3xl text-zinc-50 text-2xl flex items-center justify-evenly "
            >
                <p
                    className="cursor-pointer font-bold hover:animate-pulse transition duration-1000"
                >
                    Home
                </p>
                <p
                    className="cursor-pointer font-bold hover:animate-pulse transition duration-1000"
                >
                    Modalidade
                </p>
                <p
                    className="cursor-pointer font-bold hover:animate-pulse transition duration-1000"
                >
                    Agenda
                </p>
            </div>
        </div>

    )
}