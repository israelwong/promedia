import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function ScrollVideos() {
  const videos = [
    {
      titulo: "Restaurantes",
      path: "./video/bites/restaurante_720.mp4",
    },
    {
      titulo: "Corporativo",
      path: "./video/bites/corporativo_720.mp4",
    },
    {
      titulo: "Educativo",
      path: "./video/bites/educativo_720.mp4",
    },
    {
      titulo: "Gimnasios",
      path: "./video/bites/gym_720.mp4",
    },
    {
      titulo: "Gobierno",
      path: "./video/bites/gobierno_720.mp4",
    },
    {
      titulo: "Acuatica",
      path: "./video/bites/acuatica_720.mp4",
    },
    {
      titulo: "Inmuebles",
      path: "./video/bites/inmuebles_720.mp4",
    },
    {
      titulo: "Spas",
      path: "./video/bites/spa_720.mp4",
    },
  ];

  return (
    <div>
      <section className="pt-10">
        {/* <h3 className="pb-5 text-gray-600 font-Bebas-Neue">
          <span className="text-cyan-600 underline">clipcitos</span> de video 
        </h3> */}
        <Swiper
          slidesPerView={1.5}
          spaceBetween={5}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 5,
            },
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <video
                className="w-full"
                playsInline
                autoPlay
                // controls
                loop
                alt="Demo reel"
                src={video.path}
              />
              <h5 className="text-sm py-1 text-gray-600">{video.titulo}</h5>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default ScrollVideos;
