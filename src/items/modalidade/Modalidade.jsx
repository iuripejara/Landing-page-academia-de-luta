import ImgGeral from "../../components/ImgGeral"

export default function Modalidade() {
    return(
        <div className="container mx-44 mt-24">
            <h1 
                className="
                    text-2xl text-zinc-100
                "
            >Modalidade</h1>
            <div 
                className="
                    mt-12 max-w-sm rounded-md mb-12
                "
            >
                <ImgGeral 
                    src="boxe.jpg" 
                    alt="teste" 
                    className="rounded-md object-cover w-full h-48
                "
                />
                <div className=" rounded-md hover:bg-blue-400 transition-colors cursor-pointer">
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
        </div>
    )
}