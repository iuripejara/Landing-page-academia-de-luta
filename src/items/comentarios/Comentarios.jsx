import ImgGeral from "../../components/ImgGeral";

export default function Comentarios() {
    return(
        <div className="mt-24 p-8" >
            <h1 className="text-2xl text-zinc-100 mx-32">Cometarios</h1>
            <div className="mt-12 flex justify-center gap-3 flex-wrap ">
                {/*CARD*/}
                <div className="border rounded-md shadow-lg max-w-md w-full bg-slate-800 p-6" >
                    {/* imagem do Usaário */}
                    <div className= "flex items-center mb-4" >
                        <div className="w-12 h-12 rounded-full bg-gray-950 overflow-hidden">
                            <ImgGeral 
                                src="user.svg" 
                                alt="utilizador" 
                                className="object-cover" 
                            /> 
                        </div>
                        <div className="ml-4">
                            <h2
                                className="text-lg text-zinc-50 font-semibold"
                            >
                                Zezinho
                            </h2>
                            <p className="text-sm text-zinc-50">
                                2 horas atrás
                            </p>
                        </div>
                    </div>
                    {/* texto do Comentario*/}
                    <p className="text-zinc-50 leading-relaxed">
                        Este é um exemplo de comentário feito por um usuário. Pode conter
                        opiniões, sugestões ou qualquer outro conteúdo relacionado ao tema.
                    </p>
                </div>
                {/*CARD*/}
                <div className="border rounded-md shadow-lg max-w-md w-full bg-slate-800 p-6" >
                    {/* imagem do Usaário */}
                    <div className= "flex items-center mb-4" >
                        <div className="w-12 h-12 rounded-full bg-gray-950 overflow-hidden">
                            <ImgGeral 
                                src="user.svg" 
                                alt="utilizador" 
                                className="object-cover" 
                            /> 
                        </div>
                        <div className="ml-4">
                            <h2
                                className="text-lg text-zinc-50 font-semibold"
                            >
                                Zezinho
                            </h2>
                            <p className="text-sm text-zinc-50">
                                2 horas atrás
                            </p>
                        </div>
                    </div>
                    {/* texto do Comentario*/}
                    <p className="text-zinc-50 leading-relaxed">
                        Este é um exemplo de comentário feito por um usuário. Pode conter
                        opiniões, sugestões ou qualquer outro conteúdo relacionado ao tema.
                    </p>
                </div>
                {/*CARD*/}
                <div className="border rounded-md shadow-lg max-w-md w-full bg-slate-800 p-6" >
                    {/* imagem do Usaário */}
                    <div className= "flex items-center mb-4" >
                        <div className="w-12 h-12 rounded-full bg-gray-950 overflow-hidden">
                            <ImgGeral 
                                src="user.svg" 
                                alt="utilizador" 
                                className="object-cover" 
                            /> 
                        </div>
                        <div className="ml-4">
                            <h2
                                className="text-lg text-zinc-50 font-semibold"
                            >
                                Zezinho
                            </h2>
                            <p className="text-sm text-zinc-50">
                                2 horas atrás
                            </p>
                        </div>
                    </div>
                    {/* texto do Comentario*/}
                    <p className="text-zinc-50 leading-relaxed">
                        Este é um exemplo de comentário feito por um usuário. Pode conter
                        opiniões, sugestões ou qualquer outro conteúdo relacionado ao tema.
                    </p>
                </div>
            </div>
        </div>
    )
}