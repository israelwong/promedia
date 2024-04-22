import ScrollVideos from "./ScrollVideos.jsx";

function Video() {
  return (
    <div>
      <section className="grid grid-cols-1 p-y w-full m-auto md:w-[70%] items-center">
        <h5 className="text-2xl py-5">Demo reel 2024 🍿</h5>
        <video
          className="w-full"
          playsInline
          autoPlay
          controls
          alt="Demo reel"
          src="./video/reel2024_2min_SD.mp4"
        />
      </section>

      <section className="md:w-[80%] py-5 md:py-10 m-auto">
        <p className="text-3xl pt-5 px-5 text-gray-600 md:text-4xl font-Bebas-Neue">
          Hemos producido videos 🎬 para muchos de nuestros clientes.
        </p>
        <h2 className="text-gray-400 text-2xl font-bold md:text-4xl">
          Amamos lo que hacemos 🥰
        </h2>
      </section>

      <section className="mb-20">
        <ScrollVideos />
      </section>
    </div>
  );
}

export default Video;
