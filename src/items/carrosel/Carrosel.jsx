import{Swiper,SwiperSlide,}from "swiper/react"
import ImgGeral from "../../components/ImgGeral"
import Botao from "../../components/Botao"

export default function Carrosel(){
    return(
      <div className="mt-32 mb-28 ">
        <h1 
          className="
            text-zinc-50 text-3xl text-center bg-Azul
            mb-12 w-[75%] xl:w-[55%] mx-auto py-4 rounded-md
          "
          >
            Nosso tudor
          </h1>
        <div className="w-full flex justify-center items-center">
          
          <Swiper
            slidesPerView={1} // Exibe um slide por vez
            pagination={{ clickable: true }} // Paginação clicável
            navigation // Navegação por setas
              className="
                w-[79%] xl:w-[70%] rounded-t-lg
              " 
          >
            <SwiperSlide className="flex justify-center items-center" >
              <ImgGeral   
                src="teste3.jpg"
                alt="Imagem topo"
                className="
                  mx-auto md:h-[300px] md:w-[600px]  rounded-lg object-cover
                  lg:w-[50rem] lg:h-[35rem] lg:object-fill lg:rounded-lg
                "    
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center" >
              <ImgGeral 
                src="teste2.jpg"
                alt="Imagem teste"
                className="
                  mx-auto md:h-[300px] md:w-[600px] rounded-lg object-cover
                  lg:w-[55rem] lg:h-[35rem] lg:object-fill
                " 
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="text-justify mx-auto p-4 mt-5 w-2/3 xl:w-1/2">
        <span 
          className="
            text-zinc-100
          "
        >
          Se está a procura de aulas ministradas por instrutores experientes, em um ambiente acolhedor, com horários flexíveis e uma gama diversificada de modalidades de luta, adequadas para todos os níveis de experiência, encontrou o lugar perfeito!
        </span>
        </div>
        <div className="flex justify-center">
          <Botao 
            text="JUNTE-SE A NÓS" 
            className="
              mt-5 py-3 px-28 bg-Azul text-zinc-100  rounded-xl
              flex justify-center items-center
            "
          />
        </div>
        
        
      </div>
        
    )
}