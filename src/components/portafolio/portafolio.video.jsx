import ScrollVideos from "./ScrollVideos.jsx";

function Video() {
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
      <section className="grid grid-cols-1 p-y w-full m-auto md:w-[70%] items-center my-5">
        {/* <h5 className="text-xl py-5">Demo reel 2024 🍿</h5> */}
        <video
          className="w-full"
          playsInline
          autoPlay
          controls
          alt="Demo reel"
          src="./video/reel2024_2min_SD.mp4"
        />
        <p className="p-5 text-xl">Demo reel</p>
      </section>

      {/* <section
        className="
        grid
        grid-cols-2
        md:grid-cols-3 
        my-20"
      >
        {videos.map((video, index) => (
          <div key={index} className="mb-10">
            <video
              className="w-full"
              playsInline
              controls
              alt={video.titulo}
              src={video.path}
            />
            <h5 className="text-sm text-gray-600">{video.titulo}</h5>
          </div>
        ))}
      </section> */}
    </div>
  );
}

export default Video;
