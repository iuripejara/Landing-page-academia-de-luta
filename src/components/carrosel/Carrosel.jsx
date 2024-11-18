import{Swiper,SwiperSlide,}from "swiper/react"

export default function Carrosel(){
    return(
        <div className="mt-28 mb-28 w-full flex justify-center items-center">
        <Swiper
          slidesPerView={1} // Exibe um slide por vez
          pagination={{ clickable: true }} // Paginação clicável
          navigation // Navegação por setas
            className="w-[80%] rounded-t-lg" // Faz com que o carrossel ocupe toda a largura disponível
        >
          <SwiperSlide>
            <img src="topo.jpg" className="object-cover w-full h-[350px] " alt="Imagem topo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="teste2.jpg" className="object-cover w-full h-[30rem]" alt="Imagem teste" />
          </SwiperSlide>
        </Swiper>
      </div>
    )
}