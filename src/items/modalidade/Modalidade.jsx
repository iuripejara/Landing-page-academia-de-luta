import ImgGeral from "../../components/ImgGeral";

export default function Modalidade() {
    return (
        <div 
            className="
                    mx-32 mt-24 bg-gradient-to-tr from-gray-800 via-gray-900 to-black p-8 rounded-lg shadow-lg
                    transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300
                "
            >
            <h1 
                className="
                    text-2xl text-zinc-100
                "
            >
                Modalidade
            </h1>
            <div 
                className="
                    mt-12 mb-12 grid grid-cols-3 gap-7
                "
            >
                <div className="max-w-sm rounded-md">
                    <ImgGeral 
                        src="boxe.jpg" 
                        alt="teste" 
                        className="rounded-md object-cover w-full h-48"
                    />
                    <div className="rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
                        <h2 
                            className="
                                text-lg text-center font-semibold text-zinc-50
                                py-5
                            "
                        >
                            Boxe
                        </h2>
                    </div>
                </div>
                <div className="max-w-sm rounded-md">
                    <ImgGeral 
                        src="teste2.jpg" 
                        alt="teste" 
                        className="rounded-md object-cover w-full h-48"
                    />
                    <div className="rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
                        <h2 
                            className="
                                text-lg text-center font-semibold text-zinc-50
                                py-5
                            "
                        >
                            Jiu-Jitsu
                        </h2>
                    </div>
                </div>
                <div className="max-w-sm rounded-md">
                    <ImgGeral 
                        src="teste.jpg" 
                        alt="teste" 
                        className="rounded-md object-cover w-full h-48"
                    />
                    <div className="rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
                        <h2 
                            className="
                                text-lg text-center font-semibold text-zinc-50
                                py-5
                            "
                        >
                            Karate
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
